import React from 'react'
import { defaults, plugins } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

function LoginStreak() {

    defaults.responsive = true;

    defaults.plugins.title.display = true;
    defaults.plugins.title.align = "start";
    defaults.plugins.title.font.size = 20;
    defaults.plugins.title.color = "black";
    defaults.plugins.legend.labels.usePointStyle = true;
    const data = [
        {
            label: "1",
            login: 22,
        },
        {
            label: "2",
            login: 23,
        },
        {
            label: "3",
            login: 24,
        },
        {
            label: "4",
            login: 25,
        },
        {
            label: "5",
            login: 0,
        },
        {
            label: "6",
            login: 1,
        },
        {
            label: "7",
            login: 0,
        },
    ];

    const data1 = [
        {
            label: "Applied",
            value: 35
        },
        {
            label: "Open",
            value: 85
        },
        {
            label: "Closed",
            value: 25
        },
    ];

    return (
        <div className='flex  h-[38vh] gap-8 flex-row justify-center items-center w-full mt-2'>
            <div className="w-[55%] h-full flex justify-center shadow-lg rounded-xl py-4 pl-4">
                <Chart
                    type='line'
                    data={{
                        labels: data.map((item) => item.label),
                        datasets: [
                            {
                                data: data.map((item) => item.login),
                                backgroundColor: "#FFC727",
                                borderColor: "#FFC727",
                                
                            }
                        ],

                    }}
                    options={{
                        plugins: {
                            title: {
                                text: "Login Streak",
                                align: "center",
                                padding: {
                                    top: 10,
                                    bottom: 30
                                },
                            },
                            legend: {
                                display: false,

                            }
                        }
                    }}
                />
            </div>
            <div className='w-[40%] h-full p-4 shadow-lg rounded-xl flex justify-center'>
                <Chart
                    type='doughnut'
                    data={{
                        labels: data1.map((item) => item.label),
                        datasets: [
                            {

                                data: data1.map((item) => item.value),
                                backgroundColor: [
                                    "#FFC727",
                                    "#4CFF48",
                                    "#DA1414",
                                ],
                                borderColor: [
                                    "#FFC727",
                                    "#4CFF48",
                                    "#DA1414",
                                ],
                                borderRadius: 5,
                            }
                        ]
                    }}
                    options={{
                        plugins: {
                            title: {
                                text: "Opprtunities",
                                align: "center",
                                padding: {
                                    top: 10,
                                    bottom: 30
                                },
                            },
                            legend: {
                                position: 'right',
                                align: 'center',
                                fullSize: true,
                                labels: {
                                    pointStyle: 'circle'
                                }
                            }


                        }
                    }}
                />
            </div>
        </div>
    )
}

export default LoginStreak
