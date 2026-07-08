import { useEffect, useState } from "react";
import { deleteParty, getParties } from "../services/partyService";
import useDebounce from "./useDebounce";
import { getStats } from "../services/partyService";
import { toast } from "react-toastify";

const useParty = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [parties, setParties] = useState([]);

  const [stats, setStats] = useState({
    totalParties: 0,
    totalCustomers: 0,
    totalVendors: 0,
    totalBoth: 0,
  });

  const [selectedParty, setSelectedParty] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [page, setPage] = useState(1);

  const limit = 10;

  const [filterType, setFilterType] = useState("");

  const [sortBy, setSortBy] = useState("createdAt");

  const [order, setOrder] = useState("desc");

  const [totalPages, setTotalPages] = useState(1);
  const fetchParties = async () => {
    try {
      const res = await getParties(
        page,
        limit,
        debouncedSearch,
        filterType,
        sortBy,
        order,
      );

      setParties(res.data.parties);

      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch Stats
  const fetchStats = async () => {
    try {
      const res = await getStats("/stats");

      setStats(res.data.stats);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this party?",
    );

    if (!confirmDelete) return;

    try {
      await deleteParty(id);
      await loadData();
      //   await fetchParties();
      toast.success("Party deleted successfully");

      // alert("Party deleted successfully");
    } catch (error) {
      // alert(error.response?.data?.message || "Delete failed");
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };
  const loadData = async () => {
    await fetchParties();
    await fetchStats();
  };

  const handlePartyAdded = async () => {
    await loadData();
    //  setSelectedParty(null);
    //   setShowForm(false);
    setShowForm(false);
  };
  const handleEdit = (party) => {
    setSelectedParty(party);
    setShowForm(true);
  };
  useEffect(() => {
    fetchParties();
  }, [page, debouncedSearch, filterType, sortBy, order]);

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  return {
    parties,
    setParties,

    stats,
    setStats,

    selectedParty,
    setSelectedParty,

    showForm,
    setShowForm,

    page,
    setPage,

    limit,

    search,
    setSearch,

    filterType,
    setFilterType,

    sortBy,
    setSortBy,

    order,
    setOrder,

    totalPages,
    setTotalPages,

    fetchParties,
    debouncedSearch,

    fetchStats,

    handleDelete,
    loadData,
    handlePartyAdded,
    handleEdit,
  };
};

export default useParty;
