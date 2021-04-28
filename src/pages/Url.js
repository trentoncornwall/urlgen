import { useState, useRef } from "react";
import styled from "styled-components";
import Link from "../components/Link";
export default function Url() {
  // State control
  const [url, setUrl] = useState();
  const [state, setState] = useState({
    region: "com",
    rid: "",
    date: "",
    time: "19:00",
    size: "2",
    source: "",
    campaign: "",
  });

  // Element references
  const FormRef = useRef();
  const RegionRef = useRef();
  const RIDRef = useRef();
  const DateRef = useRef();
  const TimeRef = useRef();
  const SizeRef = useRef();
  const SourceRef = useRef();
  const CampaignRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    if (!state.rid || !state.date || state.rid < 0) {
      // preform a toast warning
      RIDRef.current.reportValidity();
      DateRef.current.reportValidity();
      return false;
    }

    setUrl(createUrl(state));
  };

  const createUrl = (data) => {
    let URL = `http://www.opentable.${data.region}/restaurant/profile/${data.rid}/reserve?restref=${data.rid}&datetime=${data.date}T${data.time}&covers=${data.size}&searchdatetime=${data.date}T${data.time}&partysize=${data.size}`;
    if (data.source) {
      URL += `&ot_source=${data.source}`;
    }
    if (data.campaign) {
      URL += `&ot_campaign=${data.campaign}`;
    }
    return URL;
  };

  return (
    <form>
      <FormList ref={FormRef} onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="region">Region</Label>
          <select
            name="region"
            value={state.region}
            ref={RegionRef}
            onChange={() =>
              setState({ ...state, region: RegionRef.current.value })
            }
          >
            <option value="com">US/CA</option>
            <option value="co.uk">UK</option>
            <option value="com.au">AU</option>
            <option value="jp">JP</option>
            <option value="ie">IE</option>
            <option value="de">DE</option>
            <option value="com.mx">MX</option>
          </select>
        </FormRow>
        <FormRow>
          <Label htmlFor="rid">Resto ID: </Label>
          <input
            type="number"
            name="rid"
            ref={RIDRef}
            onChange={() => setState({ ...state, rid: RIDRef.current.value })}
            autoComplete="off"
            required="required"
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="dates">Date: </Label>
          <input
            type="date"
            name="date"
            value={state.date}
            ref={DateRef}
            placeholder="yyyy-mm-dd"
            onChange={() => setState({ ...state, date: DateRef.current.value })}
            required="required"
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="time">Time: </Label>
          <select
            name="time"
            ref={TimeRef}
            value={state.time}
            onChange={() => {
              setState({ ...state, time: TimeRef.current.value });
            }}
            required
          >
            <option value="07:00">07:00 am</option>
            <option value="07:30">07:30 am</option>
            <option value="08:00">08:00 am</option>
            <option value="08:30">08:30 am</option>
            <option value="09:00">09:00 am</option>
            <option value="09:30">09:30 am</option>
            <option value="10:00">10:00 am</option>
            <option value="10:30">10:30 am</option>
            <option value="11:00">11:00 am</option>
            <option value="11:30">11:30 am</option>
            <option value="12:00">12:00 pm</option>
            <option value="12:30">12:30 pm</option>
            <option value="13:00">1:00 pm</option>
            <option value="13:30">1:30 pm</option>
            <option value="14:00">2:00 pm</option>
            <option value="14:30">2:30 pm</option>
            <option value="15:00">3:00 pm</option>
            <option value="15:30">3:30 pm</option>
            <option value="16:00">4:00 pm</option>
            <option value="16:30">4:30 pm</option>
            <option value="17:00">5:00 pm</option>
            <option value="17:30">5:30 pm</option>
            <option value="18:00">6:00 pm</option>
            <option value="18:30">6:30 pm</option>
            <option value="19:00">7:00 pm</option>
            <option value="19:30">7:30 pm</option>
            <option value="20:00">8:00 pm</option>
            <option value="20:30">8:30 pm</option>
            <option value="21:00">9:00 pm</option>
            <option value="21:30">9:30 pm</option>
            <option value="22:00">10:00 pm</option>
            <option value="22:30">10:30 pm</option>
            <option value="23:00">11:00 pm</option>
            <option value="23:30">11:30 pm</option>
          </select>
        </FormRow>
        <FormRow>
          <Label htmlFor="party">Size: </Label>
          <select
            name="party"
            ref={SizeRef}
            value={state.size}
            onChange={() => setState({ ...state, size: SizeRef.current.value })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </FormRow>
        <FormRow>
          <Label htmlFor="source">Source: </Label>
          <select
            name="source"
            value={state.source}
            ref={SourceRef}
            onChange={() =>
              setState({ ...state, source: SourceRef.current.value })
            }
          >
            <option value="">None</option>
            <option value="Restaurant%20website">Restaurant Website</option>
            <option value="Email">Email</option>
            <option value="Facebook">Facebook</option>
            <option value="Google">Google</option>
            <option value="Instagram">Instagram</option>
            <option value="Other">Other</option>
          </select>
        </FormRow>
        <FormRow>
          <Label htmlFor="campaign">Campaign: </Label>
          <input
            type="text"
            name="campaign"
            placeholder="optional"
            ref={CampaignRef}
            onChange={() =>
              setState({ ...state, campaign: CampaignRef.current.value })
            }
            autoCapitalize="off"
          />
        </FormRow>
        <SubmitButton type="submit" onClick={handleSubmit}>
          Submit
        </SubmitButton>
        <Link url={url} />
      </FormList>
    </form>
  );
}

const SubmitButton = styled.button`
  margin-top: 1em;
  font-size: 15px;
  width: 150px;
  height: 35px;
`;
const FormList = styled.ul`
  list-style-type: none;
  margin-top: 6em;
`;

const FormRow = styled.li`
  display: grid;
  margin-bottom: 15px;
  grid-template-columns: 110px 200px;
  height: 1.5em;
  width: 100%;
`;
const Label = styled.label`
  margin: 5px 10px 5px 0;
`;
