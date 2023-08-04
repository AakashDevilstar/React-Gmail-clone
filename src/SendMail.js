import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./config/mailSlice";
import { db } from "./Authentication/Firebase";
import firebase from "firebase/compat/app";
import { collection, addDoc } from "firebase/firestore";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (formdata) => {
    console.log(formdata);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    addDoc(collection(db, "email"), {
      To: formdata.to,
      Subject: formdata.subject,
      Message: formdata.message,
      Hours: new Date().getHours(),
      Minutes: new Date().getMinutes(),
      Date: today,
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail_close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          {...register("to", { required: true })}
          type="text"
        />
        {errors.to && <p className="sendMail_error">To is Required!!!!</p>}
        <input
          name="subject"
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is Required!!!!</p>
        )}
        <input
          name="message"
          {...register("message", { required: true })}
          placeholder="Message...."
          type="text"
          className="sendMail_meassage"
        />
        {errors.message && (
          <p className="sendMail_error">Message is Required!!!!</p>
        )}
        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
