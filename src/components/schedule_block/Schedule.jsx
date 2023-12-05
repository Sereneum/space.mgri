/* eslint-disable import/extensions */
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.jsx";
import {
  epoch_getMinorUserData,
  epoch_schedule,
} from "../../http/epochServer.js";
import ScheduleController from "./ScheduleController.jsx";
import ScheduleWeek from "./ScheduleWeek.jsx";
import { pointToSlash } from "../../managers/timeManager.js";
import { sch_parser } from "../../managers/schManager.js";
import LoaderSchedule from "../loaders/LoaderSchedule.jsx";

const Schedule = observer(() => {
  const { user } = useContext(Context);
  // const [weekData, setWeekData] = useState({})
  // const [weekID, setWeekID] = useState(pointToSlash(new Date())); // pointToSlash(new Date())
  const [isLoading, setIsLoading] = useState(true);

  const id = user.userData.anotherID;

  /* проверяет доп. данные, загружает календарь и лекции выбранной недели */
  const sequence = async (weekID) => {
    // нет доп. данных
    const isEmptyMinor = !Object.keys(user.minorUserData).length;
    const isCalendar = !!Object.keys(user.calendar).length;

    if (isEmptyMinor) {
      await epoch_getMinorUserData(id).then((r) =>
        user.setMinorUserData(r.data.data)
      );
    }

    const groupID = user.minorUserData.group.item2;

    await epoch_schedule({ groupID, weekID, isCalendar }).then((r) => {
      if (!isCalendar) user.setCalendar(r[1]);
      user.setWeekData(sch_parser(r[0].rasp, weekID));
      setIsLoading(false);
    });
  };

  const logic = (week = null) => {
    if (!week) {
      week = pointToSlash(new Date());
    }
    user.setWeekID(week);
    sequence(week).then((r) => {});
  };

  useEffect(() => {
    if (user.weekID && user.weekData !== {}) {
      setIsLoading(false);
      return;
    }
    logic();
  }, []);

  const updateWeek = (newWeekID) => {
    if (!isLoading) setIsLoading(true);
    logic(newWeekID);
  };

  if (isLoading) {
    return (
      <div className="block">
        <div className="title_container">
          <h1>Расписание</h1>
        </div>
        <LoaderSchedule />
      </div>
    );
  }

  return (
    <div className={"block"} style={{ overflow: "visible" }}>
      {/* TITLE */}
      <div className="title_container">
        <h1>Расписание</h1>
      </div>

      {/* SCHEDULE CONTROL BLOCK */}
      <ScheduleController
        weekID={user.weekID}
        updateWeek={updateWeek}
        calendar={user.calendar}
      />

      {/* SCHEDULE WEEK BLOCK */}
      <ScheduleWeek weekData={user.weekData} />

      {/* end block */}
    </div>
  );
});

export default Schedule;
