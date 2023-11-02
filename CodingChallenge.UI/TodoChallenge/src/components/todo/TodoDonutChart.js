import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { connect } from "react-redux";
import { TodoListModel } from "../../TodoModel";

const TodoDonutChart = (props) => {

    const chartData = [
        { label: 'Done', value: props.todos.filter(todo => todo.isCompleted).length },
        { label: 'Not Done', value: props.todos.filter(todo => !todo.isCompleted).length },
    ]

    return (
        <PieChart
            series={[
                {
                    data: chartData,
                    cx: 500,
                    cy: 200,
                    innerRadius: 40,
                    outerRadius: 80,
                },
            ]}
            height={300}
            slotProps={{
                legend: { hidden: false },
            }}
        />
    );
}

TodoDonutChart.propTypes = TodoListModel;

const mapStateToProps = (state) => ({
    todos: state.todos ?? []
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDonutChart);