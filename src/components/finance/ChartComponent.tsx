
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface ChartData {
  name: string;
  value: number;
  projected?: number;
}

interface ChartComponentProps {
  title: string;
  data: ChartData[];
  type: "line" | "bar";
  height?: number;
}

const ChartComponent = ({
  title,
  data,
  type,
  height = 300
}: ChartComponentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          {type === "line" ? (
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                activeDot={{ r: 8 }}
                name="Réel"
              />
              {data.some(item => item.projected !== undefined) && (
                <Line
                  type="monotone"
                  dataKey="projected"
                  stroke="#10b981"
                  strokeDasharray="5 5"
                  name="Prévision"
                />
              )}
            </LineChart>
          ) : (
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3b82f6" name="Réel" />
              {data.some(item => item.projected !== undefined) && (
                <Bar dataKey="projected" fill="#10b981" name="Prévision" />
              )}
            </BarChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
