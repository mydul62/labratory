import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const AdminDeshBoard = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center mb-4">
        <div className="rounded-l-md bg-[#a2c693] flex flex-col justify-center items-center h-48 w-full">
          <h1 className="text-4xl text-white font-bold">Total cost</h1>
          <h3 className="text-3xl text-white font-bold">500tk</h3>
        </div>
        <div className="bg-[#c6bf93] flex flex-col justify-center items-center h-48 w-full">
          <h1 className="text-4xl text-white font-bold">Total cost</h1>
          <h3 className="text-3xl text-white font-bold">500tk</h3>
        </div>
        <div className="bg-[#59407c] flex rounded-r-md flex-col justify-center items-center h-48 w-full">
          <h1 className="text-4xl text-white font-bold">Total cost</h1>
          <h3 className="text-3xl text-white font-bold">500tk</h3>
        </div>
      </div>

      <div className=' flex justify-between'>
      <div className=' w-[70%] bg-green-300'>
      </div>
      <div className=' w-[30%] bg-slate-100 '>
      <div className="w-full h-[350px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="30%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div></div>
      
      
      </div>
    </div>
  );
};

export default AdminDeshBoard;
