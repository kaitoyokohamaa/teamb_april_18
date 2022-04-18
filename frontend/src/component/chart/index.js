import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
export const Chart = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`/data/data.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((_response) => _response.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  }, []);

  const dummyData = [
    "total",
    "backlog",
    "inProgress",
    "inCheck",
    "onReview",
    "done",
    "total-progress-rate",
    "eng-progress-rate",
    "date-to-all-in",
    "outstanding",
    "wip",
    "ideal-progress-rate",
    "numTesters",
    "additionalTesters",
  ];

  const randomColor = () => {
    var makingColorCode = "0123456789ABCDEF";
    var finalCode = "#";
    for (let counter = 0; counter < 6; counter++) {
      finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
    }
    return finalCode;
  };
  const totalData =
    data &&
    data.map((res) => {
      return {
        name: res.date,
        total: res.total,
        backlog: res.backlog,
        inProgress: res["in-progress"],
        inCheck: res["in-check"],
        onReview: res["on-review"],
        done: res["done"],
        totalProgressRate: res["total-progress-rate"],
        engProgressRate: res["eng-progress-rate"],
        dateToAllIn: res["date-to-all-in"],
        outstanding: res.outstanding,
        wip: res.wip,
        idealProgressRate: res["ideal-progress-rate"],
        numTesters: res["num-testers"],
        additionalTesters: res["additional-testers"],
      };
    });

  return (
    <Box mt="130" textAlign="center">
      <h1>This is Jira data</h1>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabPanels>
          <TabPanel>
            <LineChart width={1500} height={600} data={totalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval="preserveStartEnd" />
              <YAxis interval="preserveStartEnd" />
              <Legend />
              <Tooltip />

              {dummyData.map((res) => {
                return (
                  <Line
                    key={res}
                    type="monotone"
                    dataKey={res}
                    stroke={randomColor()}
                  />
                );
              })}
            </LineChart>
          </TabPanel>
          <TabPanel>
            <LineChart width={1500} height={600} data={totalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval="preserveStartEnd" />
              <YAxis interval="preserveStartEnd" />
              <Legend />
              <Tooltip />

              {dummyData.map((res) => {
                return (
                  <Line
                    key={res}
                    type="monotone"
                    dataKey={res}
                    stroke={randomColor()}
                  />
                );
              })}
            </LineChart>
          </TabPanel>
          <TabPanel>
            <LineChart width={1500} height={600} data={totalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval="preserveStartEnd" />
              <YAxis interval="preserveStartEnd" />
              <Legend />
              <Tooltip />

              {dummyData.map((res) => {
                return (
                  <Line
                    key={res}
                    type="monotone"
                    dataKey={res}
                    stroke={randomColor()}
                  />
                );
              })}
            </LineChart>
          </TabPanel>
        </TabPanels>
        <TabList ml="14">
          <Tab>1月</Tab>
          <Tab>2月</Tab>
          <Tab>3月</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
