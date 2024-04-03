import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useSplitPDFLogic = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [toggleStateSplit, setToggleStateSplit] = useState(1);
  const [loading, setLoading] = useState(true); const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const [splitData, setSplitData] = useState("");

  const pageNumber = 1;
  const files = [...fileList];

  useEffect(() => {
    document.title = "Split PDF files online.";
    const delay = 500;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_JSON_URL}/detailsPages`);
      const data = await response.json();
      setSplitData(data.split);
    }

    fetchData();
  }, []);

  // For Sidebar
  const toggleCart = () => {
    setSidebar(!sidebar);
  };

  // For Active tabs
  const handleToggleTab = (index) => {
    setToggleStateSplit(index);
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFileList([selectedFile]);
    setPageCount(0);
    setStartPage(0);
    setEndPage(0);

    const reader = new FileReader();
    reader.onload = async (event) => {
      const typedArray = new Uint8Array(event.target.result);
      const pdf = await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.js';
        script.onload = () => {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.js';

          const loadingTask = window.pdfjsLib.getDocument(typedArray);
          loadingTask.promise.then((pdfDocument) => {
            resolve(pdfDocument);
          }).catch((error) => {
            reject(error);
          });
        };
        document.body.appendChild(script);
      });

      const numPages = pdf.numPages;
      setPageCount(numPages);
      setStartPage(1);
      setEndPage(numPages);
    };

    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  const handleStartPageChange = (e) => {
    const value = Number(e.target.value);
    setStartPage(value);
    setEndPage(Math.max(value, endPage));
  };

  const handleLastPageChange = (e) => {
    const value = Number(e.target.value);
    setEndPage(value);
    setStartPage(Math.min(value, startPage));
  };

  const handleUploadClick = async () => {
    if (!fileList) {
      setError("Select pdf file");
      return;
    }

    var formData = new FormData();
    formData.append("file", fileList[0]);
    formData.append("range", `${startPage}-${endPage}`);

    setOpen(true);

    try {
      setIsMerging(true);
      setStatusMessage("Splitting Files..."); // Setting the status message
      setError(null); // Resetting error state

      const url = `${process.env.REACT_APP_API_URL}/public/api/split-pdf-merge`;
      const response = await axios.post(url, formData, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status === 200 && response.data.status) {
        setFileList(response.data);
        setStatusMessage("Success!");
        navigate("/Download_PDF", {
          state: {
            name: "Splitting PDF",
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

  return {
    files,
    pageNumber,
    open,
    fileList,
    loading,
    sidebar,
    splitData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
    pageCount,
    toggleStateSplit,
    handleToggleTab,
    handleStartPageChange,
    handleLastPageChange,
    startPage,
    endPage
  }
}

export default useSplitPDFLogic;