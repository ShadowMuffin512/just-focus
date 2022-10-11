import React from "react";
import Switch from "react-switch";
import styles from "./SettingsOption.module.css";

import { useSelector, useDispatch } from "react-redux";
import { updateSettings } from "../../utils/reducers/settings";
import { RootState } from "../../utils/store";

const SettingsOption = (props: { settingName: string, settingLabel: string }) => {
  const settings = useSelector((state: RootState) => state.settings.settings);
  const dispatch = useDispatch();
  const handleSwitchChange = (checked: boolean, _: MouseEvent, id: string) => {
    dispatch(updateSettings({ newSettings: { [id]: checked } }));
  };
  return (
    <React.Fragment>
      <label
        className={`${styles.switchWrapper} d-flex align-items-center justify-content-between p-4`}
      >
        <span className={`${styles.switchLabel}`}>{props.settingLabel}</span>
        <Switch
          id={props.settingName}
          checked={settings[props.settingName]}
          onChange={handleSwitchChange}
          onColor="#0093d9"
          offColor="#1f0821"
        />
      </label>
    </React.Fragment>
  );
};

export default SettingsOption;
