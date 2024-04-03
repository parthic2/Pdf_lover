import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useProtectLogic = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formInput, setFormInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [formError, setFormError] = useState({
    password: "",
    confirmPassword: "",
  });
  const [sidebar, setSidebar] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isMerging, setIsMerging] = useState(false);
  const [error, setError] = useState(null);
  const [protectData, setProtectData] = useState("");
  const files = [...fileList];
  const pageNumber = 1;

  useEffect(() => {
    document.title = "Protect PDF files. Tools to encrypt PDF with password.";
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
      setProtectData(data.protect);
    }

    fetchData();
  }, []);

  // For Password validation
  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = () => {
    let inputError = {
      password: "",
      confirmPassword: "",
    };

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be the same",
      });
      return false;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return false;
    }

    setFormError(inputError);
    return true;
  };

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

    const isValid = validateFormInput();

    if (!isValid) {
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("file", fileList[i]);
    }
    formData.append("password", formInput.password);

    setOpen(true);

    try {
      setIsMerging(true);
      setStatusMessage("Protecting Files...");
      setError(null);

      const url = `${process.env.REACT_APP_API_URL}/public/api/lock-pdf`;
      const response = await axios.post(url, formData, {
        "Content-Type": "multipart/form-data",
      });

      if (response.status === 200 && response.data.status) {
        setFileList(response.data);
        setStatusMessage("Success!");
        localStorage.setItem('protectedPdfPassword', formInput.password);
        navigate("/Download_PDF", {
          state: {
            name: "Protect PDF",
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
    handleUserInput,
    formInput,
    formError,
    files,
    pageNumber,
    open,
    fileList,
    loading,
    sidebar,
    protectData,
    handleFileChange,
    handleUploadClick,
    toggleCart,
    statusMessage,
    isMerging,
    error,
  };
}

export default useProtectLogic;