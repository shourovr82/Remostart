/* eslint-disable react/jsx-no-constructed-context-values */

import { useEffect, useState } from 'react';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import loadingAnimation from '../Assets/Images/LoadingAnimation.svg';
import AuthContext from './AuthContext';

const UserContext = ({ children }) => {
  // hooks

  const [loading, setLoading] = useState(false);
  const [serviceUser, setServiceUser] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (allData, setIsOpen) => {
    await axios
      .post(`${process.env.REACT_APP_URL_STARTUP}/api/talent/talent-request`, allData)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.requiredTalentsInHistory.length) {
            setSearchResults(res.data);
            setIsOpen(false);
          }
          if (!res.data.requiredTalentsInHistory.length) {
            toast.error('no result found. search again');
          }
        } else {
          toast.error('There is an error');
        }

        setLoading(false);

        // if (res.data._id) {
        //   toast.success('Contracts job data edited successfully');

        // }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const { user } = useSelector((state) => state.auth);

  const tier = 'tierFree';
  // const { data: lastSearchResult, refetch } = useQuery(['lastSearchResult'], () =>
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_URL_STARTUP}/api/talent/last-results?email=${user?.user?.email}&tier=${tier}`
  //     )
  //     .then((res) => res.data)
  // );
  const [lastSearchResult, setLastSearchResult] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user?.user?.email) {
          const result = await axios.get(
            `${process.env.REACT_APP_URL_STARTUP}/api/talent/last-results?email=${user?.user?.email}&tier=${tier}`
          );
          setLastSearchResult(result.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user]);

  const [results, setResults] = useState([]);
  useEffect(() => {
    if (searchResults?.requiredTalentsInHistory?.length) {
      setResults(searchResults);
    } else {
      setResults(lastSearchResult);
    }
  }, [searchResults, lastSearchResult]);

  useEffect(() => {
    setLoading(true);
    const getUser = () => {
      fetch(`${process.env.REACT_APP_URL_STARTUP}/auth/login/success`, {
        // fetch("https://temp-back-production.up.railway.app/auth/login/success", {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          setLoading(false);

          setServiceUser(resObject.user);
        })
        .catch((err) => {
          setLoading(false);
        });
    };
    getUser();
  }, []);
  if (loading) {
    return (
      <div className="grid h-screen  place-items-center">
        <img src={loadingAnimation} alt="" />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        serviceUser,
        handleSearch,
        searchResults,
        results,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
