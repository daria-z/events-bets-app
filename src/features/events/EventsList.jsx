import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllEvents,
  getEventsStatus,
  getEventsError,
  fetchEvents,
} from "./eventsSlice";

import EventCard from "./components/EventCard";
import { nanoid } from "@reduxjs/toolkit";

const EventsList = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectAllEvents);
  const eventsStatus = useSelector(getEventsStatus);
  const error = useSelector(getEventsError);

  useEffect(() => {
    if (eventsStatus === "idle") {
      dispatch(fetchEvents());
    }
  }, [eventsStatus, dispatch]);

  // const renderEvents = events.map((event) => {
  //   return (
  //     <>
  //       <EventCard
  //         key={nanoid()}
  //         id={event.id}
  //         name={event.name}
  //         results={event.results}
  //         description={event.description}
  //       />
  //     </>
  //   );
  // });

  let content;
  if (eventsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (eventsStatus === "succeeded") {

    content = events.map((event) => (
      <EventCard
        key={nanoid()}
        id={event.id}
        name={event.name}
        results={event.results}
        description={event.description}
      />
    ));

  } else if (eventsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="flex flex-wrap gap-5">
      {content}
    </div>
  );
};

export default EventsList;
