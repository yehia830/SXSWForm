import React, { Component } from "react";
import { FRI, SAT, SUN } from "./ScheduleObject";
import { List, ListItem } from "material-ui/List";
import FontIcon from "material-ui/FontIcon";
import Box from "material-ui/svg-icons/av/stop";

const OHUB = "rgb(70,200,217)";
const HBCU = "rgb(221,78,225)";
class Friday extends Component {
  render() {
    const friday = FRI.map((data, index) => {
      const date = (
        <p style={{ color: "white", fontSize: 13 }}> {data.time} </p>
      );
      return (
        <ListItem
          leftCheckbox={
            <p
              style={{
                textAlign: "right",
                fontWeight: "bolder",
                fontSize: 20,
                color: data.type == 0 ? OHUB : HBCU
              }}
            >
              •
            </p>
          }
          secondaryTextLines={2}
          style={{
            color: data.type == "SX" ? OHUB : "white",
            fontWeight: "bolder"
          }}
          primaryText={data.title}
          secondaryText={date}
        />
      );
    });
    return (
      <div>
        <h3 style={styles.dayTitle}> FRIDAY - MAR 9</h3>
        <List style={{ textAlign: "left", fontWeight: "bolder" }}>
          {friday}
        </List>
      </div>
    );
  }
}

class Saturday extends Component {
  render() {
    const Saturday = SAT.map((data, index) => {
      const date = (
        <p style={{ color: "white", fontSize: 13 }}> {data.time} </p>
      );
      if (data.title == "OFFICAL SX SESSIONS") {
        return (
          <p
            style={{
              fontSize: 17,
              color: OHUB,
              textDecoration: "underline",
              textAlign: 'center', 
            }}
          >
            {data.title}
          </p>
        );
      }
      return (
        <ListItem
          leftCheckbox={
              data.type != 'SX' ?

            <p
              style={{
                textAlign: "right",
                fontWeight: "bolder",
                fontSize: 20,
                color: data.type == 0 ? OHUB : HBCU
              }}
            >
              •
            </p> : 
            <p
              style={{
                textAlign: "right",
                fontWeight: "bolder",
                fontSize: 20,
                color: 'transparent'
              }}
            >
              •
            </p>
          }
          secondaryTextLines={2}
          style={{
            color: data.type == "SX" ? OHUB : "white",
            fontWeight: "bolder"
          }}
          primaryText={data.title}
          secondaryText={date}
        />
      );
    });
    return (
      <div>
        <h3 style={styles.dayTitle}> SAT - MAR 10</h3>
        <List style={{ textAlign: "left", fontWeight: "bolder" }}>
          {Saturday}
        </List>
      </div>
    );
  }
}

class Sunday extends Component {
  render() {
    const sunday = SUN.map((data, index) => {
      const date = (
        <p style={{ color: "white", fontSize: 13 }}> {data.time} </p>
      );
      return (
        <ListItem
          leftCheckbox={
            <p
              style={{
                textAlign: "right",
                fontWeight: "bolder",
                fontSize: 20,
                color: data.type == 0 ? OHUB : HBCU
              }}
            >
              •
            </p>
          }
          secondaryTextLines={2}
          style={{
            color: data.type == "SX" ? OHUB : "white",
            fontWeight: "bolder"
          }}
          primaryText={data.title}
          secondaryText={date}
        />
      );
    });
    return (
      <div>
        <h3 style={styles.dayTitle}> SUN - MAR 11</h3>
        <List style={{ textAlign: "left", fontWeight: "bolder" }}>
          {sunday}
        </List>
      </div>
    );
  }
}

const styles = {
  dayTitle: {
    fontSize: 20,
    color: OHUB,
    textDecoration: "underline",
    paddingRight: "5%"
  }
};

export { Friday, Saturday, Sunday };
