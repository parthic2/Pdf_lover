import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRepairApi } from "../../../Redux/Action/Pages/RepairPDFAction";
import axios from "axios";

const useRepairLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const files = [...fileList];
  const pageNumber = 1;

  const repairData = useSelector((state) => state.repairReducer.repairData);

  useEffect(() => {
    document.title = "Repair PDF files online..";
    dispatch(getRepairApi());
    const delay = 2000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [dispatch]);


  const handleFileChange = (e) => {
    const fileList = e.target.files;
    const fileArray = Array.from(fileList);
    setFileList(fileArray);
  };

  // Upload File
  const handleUploadClick = async () => {
    if (!fileList) {
      return;
    }
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("file", fileList[i]);
    }

    setOpen(true);

    try {
      setIsMerging(true);
      setStatusMessage("Repairing Files...");
      setError(null);

      const url = `${process.env.REACT_APP_API_URL}/public/api/repair-pdf`;
      const response = await axios.post(url, formData, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status === 200 && response.data.status) {
        setFileList(response.data);
        setStatusMessage("Success!");
        navigate("/Download_PDF", {
          state: {
            name: "Repair PDF",
            file: response.data.data.file,
          },
        });
      } else {
        setOpen(false);
        setError(response.data.msg || "An error occurred");
      }
    } catch (error) {
      setError("Something Went Wrong!");
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  };

  // For Sidebar
  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  return {
    files,
    pageNumber,
    open,
    fileList,
    loading,
    sidebar,
    repairData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
  }
}

export default useRepairLogic;