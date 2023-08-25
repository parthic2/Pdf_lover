import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getExcelToPDFApi } from "../../../Redux/Action/Pages/EXCELToPDFAction";
import axios from "axios";

const useExcelLogic = () => {
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

  const EtoPData = useSelector((state) => state.EXCELtoPDFReducer.EtoPData);

  useEffect(() => {
    document.title = "Convert EXCEL to PDF.";
    dispatch(getExcelToPDFApi());
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
      setStatusMessage("Converting EXCEl to PDF File...");
      setError(null);

      const url = `${process.env.REACT_APP_API_URL}/public/api/office-to-pdf`;
      const response = await axios.post(url, formData, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status === 200 && response.data.status) {
        setFileList(response.data);
        setStatusMessage("Success!");
        navigate("/Download_PDF", {
          state: {
            name: "Excel to PDF",
            file: response.data.data.file
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
    open,
    fileList,
    loading,
    sidebar,
    EtoPData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
  };
}

export default useExcelLogic;