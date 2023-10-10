import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificContact = () => {
  let [data, setData] = useState({});
  // let contactId = "64f6c04fc722e5cb9555c26f";
  let params = useParams()
  let getcontact = async () => {
    let result = await axios({
      url: `http://localhost:8000/api/v1/contacts/${params.contactId}`,
      method: "GET",
    });
    setData(result.data.data);
  };
  useEffect(() => {
    getcontact();
  }, []);

  return (
    <div>
      <p>FullName={data.fullName}</p>
      <p>Email={data.email}</p>
      <p>phone number={data.phoneNumber}</p>
    </div>
  );
};
export default ReadSpecificContact;
