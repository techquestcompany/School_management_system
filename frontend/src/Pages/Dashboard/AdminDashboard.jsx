import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  // Sample data for the bar chart
  const chartData = {
    labels: ["Term 1","Term 2","Term3"], // X-axis labels
    datasets: [
      {
        label: 'Expenses', // Label for the bar chart
        data: [75000, 65000, 80000], // Data for each bar
        backgroundColor: 'rgba(80, 252, 150, 0.2)', // Color for the bars
        borderColor: 'rgba(75, 192, 192, 1)', // Border color for the bars
        borderWidth: 1, // Border width for the bars
      },
    ],
  };

  // Options for the bar chart
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Termly Expenses', // Title for the chart
      },
    },
  };

  return (
    <div>
      <div className="dashboard-container">
        <div className="graph-container">
          <Bar data={chartData} options={chartOptions} />
        </div>

        <div>
          {/* Other content of the dashboard */}

          <div className="school-info-container" >

            <div className='total-students-cont'>   <p>Total Number of Students</p> 
              <span>  450</span>
            </div>

            
            <div className='total-staff-container' style={{backgroundColor:"blue"}}>   <p>Total Number of Staff</p> 
              <span>  50</span>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
