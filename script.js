// Datos de vendedores
const salesData = {
    ana: {
        name: "Ana Martínez",
        position: "Gerente de Cuentas Senior",
        annualProgress: 26,
        totalSales: "$294,580",
        newClients: 52,
        retention: "94%",
        perClient: "$5,665",
        monthly: [
            { month: "Enero", sales: "$98,450", clients: 18, target: "105.9%" },
            { month: "Febrero", sales: "$94,230", clients: 16, target: "101.3%" },
            { month: "Marzo", sales: "$101,900", clients: 18, target: "109.6%" }
        ]
    },
    carlos: {
        name: "Carlos Sánchez",
        position: "Gerente de Cuentas",
        annualProgress: 25,
        totalSales: "$275,430",
        newClients: 48,
        retention: "91%",
        perClient: "$5,738",
        monthly: [
            { month: "Enero", sales: "$89,670", clients: 15, target: "102.5%" },
            { month: "Febrero", sales: "$91,240", clients: 17, target: "104.3%" },
            { month: "Marzo", sales: "$94,520", clients: 16, target: "98.5%" }
        ]
    },
    elena: {
        name: "Elena Gómez",
        position: "Representante de Ventas Senior",
        annualProgress: 24,
        totalSales: "$258,680",
        newClients: 45,
        retention: "89%",
        perClient: "$5,748",
        monthly: [
            { month: "Enero", sales: "$84,320", clients: 14, target: "97.5%" },
            { month: "Febrero", sales: "$88,760", clients: 15, target: "102.6%" },
            { month: "Marzo", sales: "$85,600", clients: 16, target: "98.9%" }
        ]
    },
    miguel: {
        name: "Miguel López",
        position: "Ejecutivo de Ventas",
        annualProgress: 23,
        totalSales: "$245,750",
        newClients: 42,
        retention: "87%",
        perClient: "$5,851",
        monthly: [
            { month: "Enero", sales: "$78,430", clients: 13, target: "96.2%" },
            { month: "Febrero", sales: "$84,120", clients: 14, target: "103.2%" },
            { month: "Marzo", sales: "$83,200", clients: 15, target: "95.6%" }
        ]
    },
    laura: {
        name: "Laura Torres",
        position: "Representante de Ventas Junior",
        annualProgress: 17,
        totalSales: "$171,450",
        newClients: 50,
        retention: "82%",
        perClient: "$3,429",
        monthly: [
            { month: "Enero", sales: "$58,230", clients: 17, target: "73.5%" },
            { month: "Febrero", sales: "$52,970", clients: 16, target: "66.8%" },
            { month: "Marzo", sales: "$60,250", clients: 17, target: "73.9%" }
        ]
    }
};

// Datos para los gráficos
const chartData = {
    overview: {
        labels: ["Enero", "Febrero", "Marzo"],
        datasets: [
            {
                label: "Ventas Totales",
                data: [409100, 411320, 425470],
                backgroundColor: "rgba(52, 152, 219, 0.5)",
                borderColor: "rgba(52, 152, 219, 1)",
                borderWidth: 1
            },
            {
                label: "Meta Mensual",
                data: [415000, 415000, 435000],
                backgroundColor: "rgba(230, 126, 34, 0.5)",
                borderColor: "rgba(230, 126, 34, 1)",
                borderWidth: 1,
                type: "line"
            }
        ]
    },
    team: {
        bar: {
            labels: ["Ana", "Carlos", "Elena", "Miguel", "Laura"],
            datasets: [{
                label: "Ventas Q1 2025",
                data: [294580, 275430, 258680, 245750, 171450],
                backgroundColor: [
                    "rgba(46, 204, 113, 0.7)",
                    "rgba(52, 152, 219, 0.7)",
                    "rgba(155, 89, 182, 0.7)",
                    "rgba(52, 73, 94, 0.7)",
                    "rgba(231, 76, 60, 0.7)"
                ],
                borderColor: [
                    "rgba(46, 204, 113, 1)",
                    "rgba(52, 152, 219, 1)",
                    "rgba(155, 89, 182, 1)",
                    "rgba(52, 73, 94, 1)",
                    "rgba(231, 76, 60, 1)"
                ],
                borderWidth: 1
            }]
        },
        line: {
            labels: ["Enero", "Febrero", "Marzo"],
            datasets: [
                {
                    label: "Ana",
                    data: [98450, 94230, 101900],
                    borderColor: "rgba(46, 204, 113, 1)",
                    backgroundColor: "rgba(46, 204, 113, 0.2)",
                    tension: 0.4
                },
                {
                    label: "Carlos",
                    data: [89670, 91240, 94520],
                    borderColor: "rgba(52, 152, 219, 1)",
                    backgroundColor: "rgba(52, 152, 219, 0.2)",
                    tension: 0.4
                },
                {
                    label: "Elena",
                    data: [84320, 88760, 85600],
                    borderColor: "rgba(155, 89, 182, 1)",
                    backgroundColor: "rgba(155, 89, 182, 0.2)",
                    tension: 0.4
                },
                {
                    label: "Miguel",
                    data: [78430, 84120, 83200],
                    borderColor: "rgba(52, 73, 94, 1)",
                    backgroundColor: "rgba(52, 73, 94, 0.2)",
                    tension: 0.4
                },
                {
                    label: "Laura",
                    data: [58230, 52970, 60250],
                    borderColor: "rgba(231, 76, 60, 1)",
                    backgroundColor: "rgba(231, 76, 60, 0.2)",
                    tension: 0.4
                }
            ]
        },
        pie: {
            labels: ["Ana", "Carlos", "Elena", "Miguel", "Laura"],
            datasets: [{
                data: [294580, 275430, 258680, 245750, 171450],
                backgroundColor: [
                    "rgba(46, 204, 113, 0.7)",
                    "rgba(52, 152, 219, 0.7)",
                    "rgba(155, 89, 182, 0.7)",
                    "rgba(52, 73, 94, 0.7)",
                    "rgba(231, 76, 60, 0.7)"
                ]
            }]
        }
    }
};

// Variables globales para los gráficos
let salesOverviewChart;
let teamPerformanceChart;

// DOM Ready
document.addEventListener("DOMContentLoaded", function() {
    initializeCharts();
    setupEventListeners();
    updateSalespersonDetails("ana");
});

// Inicializar gráficos
function initializeCharts() {
    // Gráfico de resumen
    const salesOverviewCtx = document.getElementById("sales-overview-chart").getContext("2d");
    salesOverviewChart = new Chart(salesOverviewCtx, {
        type: "bar",
        data: chartData.overview,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: "Ventas vs Meta - Q1 2025",
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: "top"
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Ventas ($)"
                    }
                }
            }
        }
    });

    // Gráfico del equipo (inicialmente como gráfico de barras)
    const teamPerformanceCtx = document.getElementById("team-performance-chart").getContext("2d");
    teamPerformanceChart = new Chart(teamPerformanceCtx, {
        type: "bar",
        data: chartData.team.bar,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: "Ventas por Vendedor - Q1 2025",
                    font: {
                        size: 16
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Ventas ($)"
                    }
                }
            }
        }
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Botones de mostrar/ocultar secciones
    document.querySelectorAll(".toggle-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);

            if (targetContent.classList.contains("hidden")) {
                targetContent.classList.remove("hidden");
                this.textContent = "▼";
            } else {
                targetContent.classList.add("hidden");
                this.textContent = "►";
            }
        });
    });

    // Filtro de mes
    document.getElementById("month-filter").addEventListener("change", function() {
        showNotification(`Filtrando por: ${this.options[this.selectedIndex].text}`);
        // En un caso real, aquí filtrarías los datos según el mes seleccionado
    });

    // Mostrar/ocultar gráficos
    document.getElementById("toggle-charts").addEventListener("change", function() {
        const chartContainers = document.querySelectorAll(".chart-container");
        chartContainers.forEach(container => {
            if (this.checked) {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
    });

    // Mostrar/ocultar detalles
    document.getElementById("toggle-details").addEventListener("change", function() {
        const detailsSection = document.getElementById("individual-details");
        if (this.checked) {
            detailsSection.style.display = "block";
        } else {
            detailsSection.style.display = "none";
        }
    });

    // Cambiar tipo de gráfico
    document.getElementById("show-bar").addEventListener("click", function() {
        updateTeamChart("bar", this);
    });

    document.getElementById("show-line").addEventListener("click", function() {
        updateTeamChart("line", this);
    });

    document.getElementById("show-pie").addEventListener("click", function() {
        updateTeamChart("pie", this);
    });

    // Cambiar vendedor seleccionado
    document.getElementById("salesperson").addEventListener("change", function() {
        updateSalespersonDetails(this.value);
    });

    // Botones de acción
    document.getElementById("print-btn").addEventListener("click", function() {
        showNotification("Preparando versión para imprimir...");
        setTimeout(() => {
            window.print();
        }, 1000);
    });

    document.getElementById("export-btn").addEventListener("click", function() {
        showNotification("Los datos han sido exportados a Excel");
        // En un caso real, aquí implementarías la exportación de datos
    });
}

// Actualizar tipo de gráfico del equipo
function updateTeamChart(type, clickedButton) {
    // Primero, desactivar todos los botones
    document.querySelectorAll(".chart-toggle").forEach(btn => {
        btn.classList.remove("active");
    });

    // Activar el botón clicado
    clickedButton.classList.add("active");

    // Destruir el gráfico existente
    teamPerformanceChart.destroy();

    // Crear nuevo gráfico según el tipo seleccionado
    const teamPerformanceCtx = document.getElementById("team-performance-chart").getContext("2d");
    let chartConfig = {
        data: chartData.team[type],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    font: {
                        size: 16
                    }
                }
            }
        }
    };

    // Configuraciones específicas según el tipo de gráfico
    if (type === "bar") {
        chartConfig.type = "bar";
        chartConfig.options.plugins.title.text = "Ventas por Vendedor - Q1 2025";
        chartConfig.options.plugins.legend = { display: false };
        chartConfig.options.scales = {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Ventas ($)"
                }
            }
        };
    } else if (type === "line") {
        chartConfig.type = "line";
        chartConfig.options.plugins.title.text = "Tendencia Mensual - Q1 2025";
        chartConfig.options.plugins.legend = { position: "top" };
        chartConfig.options.scales = {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Ventas ($)"
                }
            }
        };
    } else if (type === "pie") {
        chartConfig.type = "pie";
        chartConfig.options.plugins.title.text = "Distribución de Ventas - Q1 2025";
        chartConfig.options.plugins.legend = { position: "top" };
    }

    // Crear nuevo gráfico
    teamPerformanceChart = new Chart(teamPerformanceCtx, chartConfig);
}

// Actualizar detalles del vendedor
function updateSalespersonDetails(salesPersonId) {
    const data = salesData[salesPersonId];

    document.getElementById("salesperson-name").textContent = data.name;
    document.getElementById("salesperson-position").textContent = data.position;
    document.getElementById("annual-progress").style.width = `${data.annualProgress}%`;
    document.getElementById("annual-progress").parentElement.nextElementSibling.textContent = `${data.annualProgress}% completado`;

    document.getElementById("total-sales").textContent = data.totalSales;
    document.getElementById("new-clients").textContent = data.newClients;
    document.getElementById("retention").textContent = data.retention;
    document.getElementById("per-client").textContent = data.perClient;

    // Actualizar tabla mensual
    const monthlyTableBody = document.getElementById("monthly-data");
    monthlyTableBody.innerHTML = "";

    data.monthly.forEach(month => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${month.month}</td>
            <td>${month.sales}</td>
            <td>${month.clients}</td>
            <td>${month.target}</td>
        `;
        monthlyTableBody.appendChild(row);
    });

    showNotification(`Mostrando datos de ${data.name}`);
}

// Mostrar notificación
function showNotification(message) {
    const notification = document.getElementById("notification");
    const notificationText = document.getElementById("notification-text");

    notificationText.textContent = message;
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}