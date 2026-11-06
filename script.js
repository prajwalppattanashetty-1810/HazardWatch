/* =========================================
   INDIA HAZARDWATCH
========================================= */


/* =========================================
   DEMO DATA
========================================= */

const hazardLocations = [

    {
        name: "Kodagu Vulnerable Village",
        state: "Karnataka",
        lat: 12.4244,
        lng: 75.7382,
        risk: "VERY HIGH",
        hazard: "Landslide",
        population: 1450,
        capacity: 700,
        vulnerable: 410
    },

    {
        name: "Mysuru Flood-Prone Village",
        state: "Karnataka",
        lat: 12.2958,
        lng: 76.6394,
        risk: "HIGH",
        hazard: "Flood",
        population: 1250,
        capacity: 800,
        vulnerable: 320
    },

    {
        name: "Uttara Kannada Coastal Village",
        state: "Karnataka",
        lat: 14.8000,
        lng: 74.1300,
        risk: "HIGH",
        hazard: "Flood / Coastal Hazard",
        population: 1100,
        capacity: 800,
        vulnerable: 260
    },

    {
        name: "Wayanad Hill Village",
        state: "Kerala",
        lat: 11.6854,
        lng: 76.1320,
        risk: "VERY HIGH",
        hazard: "Landslide",
        population: 1800,
        capacity: 900,
        vulnerable: 520
    },

    {
        name: "Alappuzha Lowland Village",
        state: "Kerala",
        lat: 9.4981,
        lng: 76.3388,
        risk: "HIGH",
        hazard: "Flood",
        population: 2100,
        capacity: 1400,
        vulnerable: 480
    },

    {
        name: "Nilgiris Hill Settlement",
        state: "Tamil Nadu",
        lat: 11.4102,
        lng: 76.6950,
        risk: "HIGH",
        hazard: "Landslide",
        population: 1250,
        capacity: 800,
        vulnerable: 290
    },

    {
        name: "Chennai Coastal Zone",
        state: "Tamil Nadu",
        lat: 13.0827,
        lng: 80.2707,
        risk: "MEDIUM",
        hazard: "Urban Flooding",
        population: 3200,
        capacity: 3000,
        vulnerable: 450
    },

    {
        name: "Konkan Coastal Village",
        state: "Maharashtra",
        lat: 16.9902,
        lng: 73.3120,
        risk: "HIGH",
        hazard: "Flood / Landslide",
        population: 1600,
        capacity: 900,
        vulnerable: 380
    },

    {
        name: "Mumbai Flood Zone",
        state: "Maharashtra",
        lat: 19.0760,
        lng: 72.8777,
        risk: "HIGH",
        hazard: "Urban Flood",
        population: 4500,
        capacity: 3500,
        vulnerable: 700
    },

    {
        name: "Chamoli Mountain Village",
        state: "Uttarakhand",
        lat: 30.4010,
        lng: 79.3200,
        risk: "VERY HIGH",
        hazard: "Landslide",
        population: 980,
        capacity: 500,
        vulnerable: 310
    },

    {
        name: "Uttarkashi Vulnerable Settlement",
        state: "Uttarakhand",
        lat: 30.7268,
        lng: 78.4354,
        risk: "VERY HIGH",
        hazard: "Landslide / Flash Flood",
        population: 1200,
        capacity: 600,
        vulnerable: 350
    },

    {
        name: "Mandi Mountain Village",
        state: "Himachal Pradesh",
        lat: 31.7088,
        lng: 76.9310,
        risk: "HIGH",
        hazard: "Landslide",
        population: 1100,
        capacity: 650,
        vulnerable: 280
    },

    {
        name: "Kullu Valley Village",
        state: "Himachal Pradesh",
        lat: 31.9579,
        lng: 77.1095,
        risk: "VERY HIGH",
        hazard: "Flash Flood / Landslide",
        population: 1350,
        capacity: 700,
        vulnerable: 400
    },

    {
        name: "Majuli Flood Zone",
        state: "Assam",
        lat: 27.0016,
        lng: 94.2243,
        risk: "VERY HIGH",
        hazard: "River Flood",
        population: 2400,
        capacity: 1200,
        vulnerable: 650
    },

    {
        name: "Dibrugarh Flood Zone",
        state: "Assam",
        lat: 27.4728,
        lng: 94.9120,
        risk: "HIGH",
        hazard: "River Flood",
        population: 2100,
        capacity: 1300,
        vulnerable: 500
    },

    {
        name: "Kosi Floodplain Village",
        state: "Bihar",
        lat: 25.5200,
        lng: 86.0000,
        risk: "VERY HIGH",
        hazard: "River Flood",
        population: 2800,
        capacity: 1500,
        vulnerable: 750
    },

    {
        name: "Mahanadi Flood Zone",
        state: "Odisha",
        lat: 20.4625,
        lng: 85.8828,
        risk: "HIGH",
        hazard: "Flood",
        population: 2200,
        capacity: 1400,
        vulnerable: 490
    },

    {
        name: "Odisha Coastal Village",
        state: "Odisha",
        lat: 19.8135,
        lng: 85.8312,
        risk: "VERY HIGH",
        hazard: "Cyclone / Storm Surge",
        population: 1900,
        capacity: 900,
        vulnerable: 560
    },

    {
        name: "Sundarbans Vulnerable Village",
        state: "West Bengal",
        lat: 21.9497,
        lng: 88.9111,
        risk: "VERY HIGH",
        hazard: "Cyclone / Flood",
        population: 2600,
        capacity: 1300,
        vulnerable: 700
    },

    {
        name: "Kutch Vulnerable Settlement",
        state: "Gujarat",
        lat: 23.7337,
        lng: 69.8597,
        risk: "MEDIUM",
        hazard: "Earthquake",
        population: 1300,
        capacity: 1000,
        vulnerable: 210
    }

];


/* =========================================
   MAP VARIABLES
========================================= */

let hazardMap = null;

let hazardMarkers = [];


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId, button = null) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    document
        .querySelectorAll(".nav-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }


    if (pageId === "map" && hazardMap) {

        setTimeout(() => {

            hazardMap.invalidateSize();

        }, 100);

    }

}


/* =========================================
   CREATE MAP
========================================= */

function initializeIndiaMap() {

    if (typeof L === "undefined") {

        console.error(
            "Leaflet was not loaded."
        );

        return;

    }


    hazardMap = L.map(
        "hazardMap"
    ).setView(
        [22.5937, 78.9629],
        5
    );


    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {

            attribution:
                "&copy; OpenStreetMap contributors",

            maxZoom: 19

        }
    ).addTo(hazardMap);


    displayIndiaHazards();

}


/* =========================================
   MARKER ICON
========================================= */

function createHazardIcon(risk) {

    let color = "#22c55e";


    if (risk === "VERY HIGH") {

        color = "#dc2626";

    }

    else if (risk === "HIGH") {

        color = "#f97316";

    }

    else if (risk === "MEDIUM") {

        color = "#eab308";

    }


    return L.divIcon({

        className: "",

        html: `
            <div
                class="hazard-marker"
                style="background:${color};">
            </div>
        `,

        iconSize: [22, 22],

        iconAnchor: [11, 11]

    });

}


/* =========================================
   DISPLAY MAP MARKERS
========================================= */

function displayIndiaHazards() {

    if (!hazardMap) return;


    /* Remove old markers */

    hazardMarkers.forEach(marker => {

        hazardMap.removeLayer(marker);

    });


    hazardMarkers = [];


    const selectedState =
        document.getElementById(
            "stateFilter"
        ).value;


    const selectedRisk =
        document.getElementById(
            "riskFilter"
        ).value;


    const filteredLocations =
        hazardLocations.filter(location => {

            const stateMatch =
                selectedState === "ALL" ||
                location.state === selectedState;


            const riskMatch =
                selectedRisk === "ALL" ||
                location.risk === selectedRisk;


            return stateMatch && riskMatch;

        });


    /* Create markers */

    filteredLocations.forEach(location => {

        const marker =
            L.marker(
                [
                    location.lat,
                    location.lng
                ],
                {
                    icon:
                        createHazardIcon(
                            location.risk
                        )
                }
            ).addTo(hazardMap);


        marker.bindTooltip(`

            <strong>
                ${location.name}
            </strong>

            <br>

            ${location.state}

            <br>

            ${location.risk}

        `);


        marker.on(
            "click",
            function () {

                showIndiaLocationDetails(
                    location
                );

            }
        );


        hazardMarkers.push(marker);

    });


    /* Fit map */

    if (filteredLocations.length > 0) {

        const bounds =
            L.latLngBounds(
                filteredLocations.map(
                    location => [
                        location.lat,
                        location.lng
                    ]
                )
            );


        hazardMap.fitBounds(
            bounds,
            {
                padding: [40, 40],

                maxZoom:
                    selectedState === "ALL"
                        ? 5
                        : 9
            }
        );

    }

    else {

        hazardMap.setView(
            [22.5937, 78.9629],
            5
        );

    }

}


/* =========================================
   LOCATION DETAILS
========================================= */

function showIndiaLocationDetails(location) {

    const panel =
        document.getElementById(
            "locationDetails"
        );


    const excess =
        Math.max(
            0,
            location.population -
            location.capacity
        );


    let riskClass =
        "risk-low";


    if (
        location.risk === "VERY HIGH"
    ) {

        riskClass =
            "risk-very-high";

    }

    else if (
        location.risk === "HIGH"
    ) {

        riskClass =
            "risk-high";

    }

    else if (
        location.risk === "MEDIUM"
    ) {

        riskClass =
            "risk-medium";

    }


    let actionHTML = "";


    if (
        excess > 0 &&
        (
            location.risk === "VERY HIGH" ||
            location.risk === "HIGH"
        )
    ) {

        actionHTML = `

            <div class="relocation-warning">

                ⚠️ Immediate relocation
                recommended.

                <br><br>

                ${excess.toLocaleString()}
                people exceed safe
                carrying capacity.

            </div>

        `;

    }

    else {

        actionHTML = `

            <div class="safe-message">

                ✓ No immediate relocation
                required.

            </div>

        `;

    }


    panel.innerHTML = `

        <h3>
            ${location.name}
        </h3>

        <p>
            ${location.state}
        </p>


        <span
            class="location-risk ${riskClass}">

            ${location.risk} RISK

        </span>


        <div class="detail-row">

            <span>
                Hazard
            </span>

            <span>
                ${location.hazard}
            </span>

        </div>


        <div class="detail-row">

            <span>
                Population
            </span>

            <span>
                ${location.population.toLocaleString()}
            </span>

        </div>


        <div class="detail-row">

            <span>
                Safe Capacity
            </span>

            <span>
                ${location.capacity.toLocaleString()}
            </span>

        </div>


        <div class="detail-row">

            <span>
                Vulnerable People
            </span>

            <span>
                ${location.vulnerable.toLocaleString()}
            </span>

        </div>


        <div class="detail-row">

            <span>
                Excess Population
            </span>

            <span>
                ${excess.toLocaleString()}
            </span>

        </div>


        ${actionHTML}

    `;

}


/* =========================================
   MAP FILTERS
========================================= */

document
    .getElementById("stateFilter")
    .addEventListener(
        "change",
        displayIndiaHazards
    );


document
    .getElementById("riskFilter")
    .addEventListener(
        "change",
        displayIndiaHazards
    );


/* =========================================
   RISK CALCULATION
========================================= */

document
    .getElementById("riskForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const location =
                document
                    .getElementById(
                        "locationName"
                    )
                    .value
                    .trim();


            const population =
                Number(
                    document
                        .getElementById(
                            "population"
                        )
                        .value
                );


            const capacity =
                Number(
                    document
                        .getElementById(
                            "capacity"
                        )
                        .value
                );


            const hazard =
                Number(
                    document
                        .getElementById(
                            "hazardLevel"
                        )
                        .value
                );


            const vulnerability =
                Number(
                    document
                        .getElementById(
                            "vulnerability"
                        )
                        .value
                );


            if (
                !location ||
                population < 0 ||
                capacity <= 0
            ) {

                alert(
                    "Please enter valid values."
                );

                return;

            }


            /* Hazard score */

            const hazardScore =
                (hazard / 4) * 100;


            /* Vulnerability score */

            const vulnerabilityScore =
                (vulnerability / 3) * 100;


            /* Capacity pressure */

            let capacityPressure = 0;


            if (population > capacity) {

                capacityPressure =
                    (
                        (
                            population -
                            capacity
                        ) /
                        capacity
                    ) * 100;

            }


            capacityPressure =
                Math.min(
                    100,
                    Math.max(
                        0,
                        capacityPressure
                    )
                );


            /* Overall risk */

            const riskScore =
                (
                    hazardScore * 0.50
                ) +
                (
                    vulnerabilityScore * 0.30
                ) +
                (
                    capacityPressure * 0.20
                );


            let classification =
                "LOW";


            if (riskScore >= 75) {

                classification =
                    "VERY HIGH";

            }

            else if (riskScore >= 50) {

                classification =
                    "HIGH";

            }

            else if (riskScore >= 25) {

                classification =
                    "MEDIUM";

            }


            const excess =
                Math.max(
                    0,
                    population -
                    capacity
                );


            const relocation =
                excess > 0 &&
                (
                    classification ===
                    "VERY HIGH" ||
                    classification ===
                    "HIGH"
                );


            let resultColor =
                "#22c55e";


            if (
                classification ===
                "VERY HIGH"
            ) {

                resultColor =
                    "#dc2626";

            }

            else if (
                classification ===
                "HIGH"
            ) {

                resultColor =
                    "#f97316";

            }

            else if (
                classification ===
                "MEDIUM"
            ) {

                resultColor =
                    "#eab308";

            }


            document
                .getElementById(
                    "riskResult"
                )
                .innerHTML = `

                    <div class="result-box">

                        <h3>
                            Risk Assessment
                        </h3>

                        <p>
                            Location:
                            <strong>
                                ${location}
                            </strong>
                        </p>

                        <div
                            class="result-score"
                            style="color:${resultColor}">

                            ${riskScore.toFixed(1)}
                            / 100

                        </div>

                        <h2
                            style="
                            color:${resultColor};
                            margin-bottom:10px;
                            ">

                            ${classification}
                            RISK

                        </h2>

                        <p>
                            Hazard Score:
                            ${hazardScore.toFixed(1)}
                        </p>

                        <p>
                            Vulnerability Score:
                            ${vulnerabilityScore.toFixed(1)}
                        </p>

                        <p>
                            Capacity Pressure:
                            ${capacityPressure.toFixed(1)}
                        </p>

                        <br>

                        <p>
                            Excess Population:
                            <strong>
                                ${excess.toLocaleString()}
                            </strong>
                        </p>

                        <br>

                        ${
                            relocation

                            ?

                            `<div class="relocation-warning">
                                ⚠️ Relocation recommended
                                for this location.
                            </div>`

                            :

                            `<div class="safe-message">
                                ✓ No immediate relocation
                                required.
                            </div>`
                        }

                    </div>

                `;

        }
    );


/* =========================================
   DASHBOARD STATISTICS
========================================= */

function updateDashboard() {

    const total =
        hazardLocations.length;


    const counts = {

        "VERY HIGH": 0,

        "HIGH": 0,

        "MEDIUM": 0,

        "LOW": 0

    };


    let totalPopulation = 0;

    let totalVulnerable = 0;

    let relocationRequired = 0;


    hazardLocations.forEach(
        location => {

            counts[
                location.risk
            ]++;


            totalPopulation +=
                location.population;


            totalVulnerable +=
                location.vulnerable;


            const excess =
                location.population -
                location.capacity;


            if (
                excess > 0 &&
                (
                    location.risk ===
                    "VERY HIGH" ||

                    location.risk ===
                    "HIGH"
                )
            ) {

                relocationRequired++;

            }

        }
    );


    document
        .getElementById(
            "veryHighCount"
        )
        .textContent =
        counts["VERY HIGH"];


    document
        .getElementById(
            "highCount"
        )
        .textContent =
        counts["HIGH"];


    document
        .getElementById(
            "mediumCount"
        )
        .textContent =
        counts["MEDIUM"];


    document
        .getElementById(
            "lowCount"
        )
        .textContent =
        counts["LOW"];


    document
        .getElementById(
            "locationCount"
        )
        .textContent =
        total;


    document
        .getElementById(
            "populationCount"
        )
        .textContent =
        totalPopulation.toLocaleString();


    document
        .getElementById(
            "vulnerableCount"
        )
        .textContent =
        totalVulnerable.toLocaleString();


    document
        .getElementById(
            "relocationCount"
        )
        .textContent =
        relocationRequired;


    /* Percentages */

    const veryHighPercent =
        (counts["VERY HIGH"] / total) * 100;


    const highPercent =
        (counts["HIGH"] / total) * 100;


    const mediumPercent =
        (counts["MEDIUM"] / total) * 100;


    const lowPercent =
        (counts["LOW"] / total) * 100;


    setRiskProgress(
        "veryHigh",
        veryHighPercent
    );


    setRiskProgress(
        "high",
        highPercent
    );


    setRiskProgress(
        "medium",
        mediumPercent
    );


    setRiskProgress(
        "low",
        lowPercent
    );


    updateAlerts();

}


/* =========================================
   RISK PROGRESS
========================================= */

function setRiskProgress(
    type,
    percentage
) {

    const rounded =
        percentage.toFixed(0);


    document
        .getElementById(
            type + "Percent"
        )
        .textContent =
        rounded + "%";


    document
        .getElementById(
            type + "Bar"
        )
        .style.width =
        percentage + "%";

}


/* =========================================
   ALERTS
========================================= */

function updateAlerts() {

    const container =
        document.getElementById(
            "alertsContainer"
        );


    const alerts =
        hazardLocations
            .filter(
                location =>
                    location.risk ===
                    "VERY HIGH" ||
                    location.risk ===
                    "HIGH"
            )
            .slice(0, 5);


    container.innerHTML = "";


    alerts.forEach(
        location => {

            const color =
                location.risk ===
                "VERY HIGH"
                    ? "red"
                    : "orange";


            container.innerHTML += `

                <div class="alert-item">

                    <span
                        class="alert-dot ${color}">
                    </span>

                    <div class="alert-content">

                        <strong>
                            ${location.name}
                        </strong>

                        <p>
                            ${location.hazard}
                            •
                            ${location.risk} risk
                        </p>

                    </div>

                </div>

            `;

        }
    );

}


/* =========================================
   RELOCATION TABLE
========================================= */

function updateRelocationTable() {

    const table =
        document.getElementById(
            "relocationTable"
        );


    table.innerHTML = "";


    const locations =
        hazardLocations.filter(
            location =>
                location.population >
                location.capacity
        );


    locations.forEach(
        location => {

            const excess =
                location.population -
                location.capacity;


            let riskClass =
                "risk-low";


            if (
                location.risk ===
                "VERY HIGH"
            ) {

                riskClass =
                    "risk-very-high";

            }

            else if (
                location.risk ===
                "HIGH"
            ) {

                riskClass =
                    "risk-high";

            }

            else if (
                location.risk ===
                "MEDIUM"
            ) {

                riskClass =
                    "risk-medium";

            }


            table.innerHTML += `

                <tr>

                    <td>
                        <strong>
                            ${location.name}
                        </strong>
                    </td>

                    <td>
                        ${location.state}
                    </td>

                    <td>
                        ${location.population.toLocaleString()}
                    </td>

                    <td>

                        <span
                            class="
                                table-risk
                                ${riskClass}
                            ">

                            ${location.risk}

                        </span>

                    </td>

                    <td>
                        ${location.capacity.toLocaleString()}
                    </td>

                    <td>

                        <button
                            class="plan-btn"
                            onclick="
                                relocationPlan(
                                    '${location.name}'
                                )
                            ">

                            Plan

                        </button>

                    </td>

                </tr>

            `;

        }
    );

}


/* =========================================
   RELOCATION PLAN
========================================= */

function relocationPlan(name) {

    alert(
        "Relocation planning selected for:\n\n" +
        name +
        "\n\n" +
        "This module can later be connected to:\n" +
        "- Safe shelters\n" +
        "- Road accessibility\n" +
        "- Transport capacity\n" +
        "- Distance\n" +
        "- Available accommodation"
    );

}


/* =========================================
   REPORT
========================================= */

function generateReport() {

    const total =
        hazardLocations.length;


    const veryHigh =
        hazardLocations.filter(
            location =>
                location.risk ===
                "VERY HIGH"
        ).length;


    const high =
        hazardLocations.filter(
            location =>
                location.risk ===
                "HIGH"
        ).length;


    const medium =
        hazardLocations.filter(
            location =>
                location.risk ===
                "MEDIUM"
        ).length;


    const low =
        hazardLocations.filter(
            location =>
                location.risk ===
                "LOW"
        ).length;


    const population =
        hazardLocations.reduce(
            (sum, location) =>
                sum + location.population,
            0
        );


    const vulnerable =
        hazardLocations.reduce(
            (sum, location) =>
                sum + location.vulnerable,
            0
        );


    const relocation =
        hazardLocations.filter(
            location =>
                location.population >
                location.capacity &&
                (
                    location.risk ===
                    "VERY HIGH" ||
                    location.risk ===
                    "HIGH"
                )
        ).length;


    const reportWindow =
        window.open(
            "",
            "_blank"
        );


    reportWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>
                India Hazard Assessment Report
            </title>

            <style>

                body {
                    font-family: Arial;
                    padding: 40px;
                    color: #172033;
                }

                h1 {
                    color: #b91c1c;
                }

                .box {
                    padding: 20px;
                    border: 1px solid #ddd;
                    margin: 15px 0;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                }

                th, td {
                    padding: 12px;
                    border: 1px solid #ddd;
                    text-align: left;
                }

            </style>

        </head>

        <body>

            <h1>
                India Hazard Assessment Report
            </h1>

            <p>
                SIH 2026 Prototype
            </p>

            <hr>

            <div class="box">

                <h2>
                    Summary
                </h2>

                <p>
                    Locations Analysed:
                    ${total}
                </p>

                <p>
                    Total Population:
                    ${population.toLocaleString()}
                </p>

                <p>
                    Vulnerable Population:
                    ${vulnerable.toLocaleString()}
                </p>

                <p>
                    Locations Requiring Relocation:
                    ${relocation}
                </p>

            </div>


            <div class="box">

                <h2>
                    Risk Distribution
                </h2>

                <table>

                    <tr>
                        <th>Risk</th>
                        <th>Locations</th>
                    </tr>

                    <tr>
                        <td>Very High</td>
                        <td>${veryHigh}</td>
                    </tr>

                    <tr>
                        <td>High</td>
                        <td>${high}</td>
                    </tr>

                    <tr>
                        <td>Medium</td>
                        <td>${medium}</td>
                    </tr>

                    <tr>
                        <td>Low</td>
                        <td>${low}</td>
                    </tr>

                </table>

            </div>


            <p>
                <strong>
                    Note:
                </strong>
                This is a prototype report.
                Hazard and population values shown
                in the current version are demonstration
                data and must be replaced with verified
                government datasets for deployment.
            </p>

            <script>

                window.onload = function() {

                    window.print();

                };

            <\/script>

        </body>

        </html>

    `);


    reportWindow.document.close();

}


/* =========================================
   INITIALIZE EVERYTHING
========================================= */

updateDashboard();

updateRelocationTable();


setTimeout(
    initializeIndiaMap,
    300
);