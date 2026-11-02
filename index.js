// STM Train Pack
(function () {
    // Montréal Rubber Metro
    window.SubwayBuilderAPI.trains.modifyTrainType('heavy-metro', {
        name: 'MPM-10 Azure',
        description: 'Only used underground because of the snow. Newer Montréal Metro with open-gangway construction.',
        stats: {
            maxSpeed: 20.1,
            maxAcceleration: 1.21,
            accelerationCurve: { a0: 1.21, a1: 1.15, v1: 11, v2: 20, exponent: 1.6 },
            maxDeceleration: 1.23,
            maxLateralAcceleration: 0.9,
            maxCantMm: 160,
            maxCantDeficiencyMm: 135,
            maxSlopePercentage: 6.5,
            maxSpeedLocalStation: 13.88,
            crossoverSpeed: 6.95,
            yardSpeedLimit: 6.95,
            stopTimeSeconds: 20,
            turnaroundTimeSeconds: 80,
            minTurnRadius: 52,
            minStationTurnRadius: 200,
            parallelTrackSpacing: 3.1,
            trackClearance: 1.53,
            minCars: 9,
            maxCars: 9,
            carsPerCarSet: 9,
            capacityPerCar: 173,
            seatsPerCar: 29,
            doorsPerCarPerSide: 3,
            carLength: 16.94,
            trainWidth: 2.52,
            minStationLength: 156,
            maxStationLength: 160,
            carCost: 1350000,
            baseTrackCost: 28_750,
            baseStationCost: 62_300_000,
            trainOperationalCostPerHour: 220,
            carOperationalCostPerHour: 32.5,
            trackMaintenanceCostPerMeter: 200,
            stationMaintenanceCostPerYear: 235_000,
            tphLimit: 38,
        },
        compatibleTrackTypes: ['heavy-metro', 'mr73'],
        appearance: {color: '#009EE0', bodyColor: '#00A3E0', couplerWidthMultiplier: 2},
        portalCost: 500_000_000_000,
        rampCost: 500_000_000_000,
        maxOverpassSpan: 5,
    });
    window.SubwayBuilderAPI.trains.registerTrainType({
        id: 'mr73',
        name: 'MR-73',
        description: 'Only used underground because of the snow. The oldest metro still used in Montreal, refurbished in 2006.',
        stats: {
            maxSpeed: 20.1,
            maxAcceleration: 1.43,
            accelerationCurve: { a0: 1.43, a1: 1.1, v1: 8.5, v2: 14, exponent: 1.7 },
            maxDeceleration: 1.35,
            maxLateralAcceleration: 0.9,
            maxCantMm: 160,
            maxCantDeficiencyMm: 135,
            maxSlopePercentage: 6.5,
            maxSpeedLocalStation: 13.88,
            crossoverSpeed: 6.95,
            yardSpeedLimit: 6.95,
            stopTimeSeconds: 20,
            turnaroundTimeSeconds: 80,
            minTurnRadius: 52,
            minStationTurnRadius: 200,
            parallelTrackSpacing: 3.1,
            trackClearance: 1.53,
            minCars: 6,
            maxCars: 9,
            carsPerCarSet: 3,
            capacityPerCar: 160,
            seatsPerCar: 34,
            doorsPerCarPerSide: 4,
            carLength: 16,
            trainWidth: 2.5,
            minStationLength: 156,
            maxStationLength: 160,
            carCost: 1_010_000,
            baseTrackCost: 28_750,
            baseStationCost: 62_300_000,
            trainOperationalCostPerHour: 250,
            carOperationalCostPerHour: 38,
            trackMaintenanceCostPerMeter: 200,
            stationMaintenanceCostPerYear: 235_000,
            tphLimit: 30,
        },
        compatibleTrackTypes: ['mr73', 'heavy-metro'],
        appearance: {color: '#009EE0', roofStyle: 'boxy', bodyColor: '#00A3E0'},
        portalCost: 500_000_000_000,
        rampCost: 500_000_000_000,
        maxOverpassSpan: 5,
    });

    window.SubwayBuilderAPI.trains.modifyTrainType('light-metro', {
        name: 'Métropolis Saint-Laurent',
        stats: {
            maxSpeedLocalStation: 27.78,
        },
    });
    // EXO Trains
    window.SubwayBuilderAPI.trains.modifyTrainType('commuter-rail', {
        name: 'ALP-45DP+MultiLevel',
        description: 'Dual-mode electric and diesel locomotive with MultiLevel cars',
        stats: {
            maxSpeed: 44.44,
            maxAcceleration: 0.76,
            accelerationCurve: { a0: 1.01, a1: 1.01, v1: 15.57, v2: 20, exponent: 1.4 },
            maxDeceleration: 0.8,
            maxSpeedLocalStation: 44.44,
            crossoverSpeed: 6.95,
            yardSpeedLimit: 6.95,
            stopTimeSeconds: 50,
            turnaroundTimeSeconds: 120,
            minTurnRadius: 88,
            minStationTurnRadius: 500,
            minCars: 3,
            maxCars: 12,
            carsPerCarSet: 3,
            capacityPerCar: 180,
            seatsPerCar: 132,
            doorsPerCarPerSide: 2,
            carLength: 25.91,
            trainWidth: 3.05,
            minStationLength: 108,
            maxStationLength: 315,
            carCost: 4_000_000,
            baseStationCost: 50_000_000,
            trainOperationalCostPerHour: 680,
            carOperationalCostPerHour: 45,
            trackMaintenanceCostPerMeter: 300,
            stationMaintenanceCostPerYear: 280_000,
            tphLimit: 23,
        },
        compatibleTrackTypes: ['commuter-rail', 'commuter-rail-diesel'],
        appearance: {
            roofStyle: 'boxy',
            bodyColor: '#FFFFFF',
            couplerWidthMultiplier: 1.5,
            catenary: true
        },
    });
    window.SubwayBuilderAPI.trains.modifyTrainType('commuter-rail-diesel', {
        name: 'EC-43+Multilevel',
        description: 'Siemens Charger Diesel Locomotive with MultiLevel cars',
        stats: {
            maxSpeed: 35.76,
            maxAcceleration: 0.5,
            accelerationCurve: { a0: 0.494, a1: 0.494, v1: 10.7, v2: 20, exponent: 1.7 },
            maxDeceleration: 1.34,
            maxSpeedLocalStation: 35.76,
            crossoverSpeed: 6.95,
            yardSpeedLimit: 6.95,
            stopTimeSeconds: 50,
            turnaroundTimeSeconds: 120,
            minTurnRadius: 88,
            minStationTurnRadius: 500,
            minCars: 3,
            maxCars: 12,
            carsPerCarSet: 3,
            capacityPerCar: 200,
            seatsPerCar: 132,
            doorsPerCarPerSide: 2,
            carLength: 25.9,
            trainWidth: 3.05,
            minStationLength: 108,
            maxStationLength: 315,
            carCost: 3_300_000,
            baseStationCost: 45_000_000,
            trainOperationalCostPerHour: 650,
            carOperationalCostPerHour: 45,
            trackMaintenanceCostPerMeter: 220,
            stationMaintenanceCostPerYear: 260_000,
            tphLimit: 23,
        },
        compatibleTrackTypes: ['commuter-rail-diesel', 'commuter-rail'],
        appearance: {roofStyle: 'boxy', bodyColor: '#FFFFFF', couplerWidthMultiplier: 1.5 },
    });
    window.SubwayBuilderAPI.trains.modifyTrainType('light-rail', {
        name: 'Citadis Spirit',
        description: 'Modern Light Rail vehicle from Alstom for the North American market.',
        stats: {
            maxSpeed: 29.17,
            minTurnRadius: 25,
            minCars: 4,
            maxCars: 8,
            carsPerCarSet: 4,
            capacityPerCar: 85,
            seatsPerCar: 30,
            doorsPerCarPerSide: 2,
            carLength: 12.22,
            minStationLength: 52,
            maxStationLength: 104,
        },
        appearance: {bodyColor: '#AEB0AD'},
        portalCost: 8_000_000,
        rampCost: 3_000_000,
    });
    window.SubwayBuilderAPI.trains.modifyTrainType('tram', {
        name: 'Flexity Freedom',
        description: 'Streetcar from Bombardier/Alstom, optimised for urban operations. Shares road space with traffic, subject to road speed limits and intersection signals.',
        stats: {
            maxSpeed: 22.22,
            maxSlopePercentage: 6,
            minCars: 5,
            maxCars: 10,
            carsPerCarSet: 5,
            capacityPerCar: 45,
            seatsPerCar: 12,
            doorsPerCarPerSide: 1,
            carLength: 6.3,
            minStationLength: 36,
            maxStationLength: 72,
            carOperationalCostPerHour: 9,
        },
        appearance: {roofStyle: 'rounded', bodyColor: '#AEB0AD'},
        portalCost: 6_000_000,
        rampCost: 2_750_000,
        gradeCrossingSpeedLimitApproachDistance: 50,
        maxOverpassSpan: 50,
    });
})();

// ============================================================
// UNDERGROUND-ONLY CONSTRUCTION RESTRICTION
// Applies only to heavy-metro and mr73.
// ============================================================

(function () {
    const api = window.SubwayBuilderAPI;

    if (!api) {
        console.error("[STM Train Pack] SubwayBuilderAPI not found!");
        return;
    }

    const RESTRICTED_TRAIN_IDS = new Set([
        'heavy-metro',
        'mr73'
    ]);

    const MAX_TRACK_ELEVATION = -4;
    const hookedButtons = new WeakSet();

    function getBlueprintTracks() {
        const tracks = api.gameState.getTracks();

        if (!Array.isArray(tracks)) {
            return [];
        }

        return tracks.filter(track =>
            track.displayType === 'blueprint'
        );
    }

    function isRestrictedTrack(track) {
        return (
            RESTRICTED_TRAIN_IDS.has(track.trainTypeId) ||
            RESTRICTED_TRAIN_IDS.has(track.trackTypeId) ||
            RESTRICTED_TRAIN_IDS.has(track.trackType)
        );
    }

    function getInvalidTracks() {
        return getBlueprintTracks().filter(track => {
            if (!isRestrictedTrack(track)) {
                return false;
            }

            const start = track.startElevation;
            const end = track.endElevation;

            return (
                !Number.isFinite(start) ||
                !Number.isFinite(end) ||
                start > MAX_TRACK_ELEVATION ||
                end > MAX_TRACK_ELEVATION
            );
        });
    }

    function validateConstruction() {
        const invalidTracks = getInvalidTracks();

        if (invalidTracks.length === 0) {
            return 'allow';
        }

        const count = invalidTracks.length;

        api.ui.showNotification(
            `Cannot build: ${count} blueprint track segments` +
            ` MPM-10 Azure or MR-73 violate the elevation requirement. ` +
            `All tracks must be at or below ${MAX_TRACK_ELEVATION} meters. ` +
            `Lower the affected tracks before constructing.`,
            'error',
            'Construction souterraine obligatoire'
        );

        console.warn(
            '[STM Train Pack] Construction bloquée :',
            invalidTracks
        );

        return 'block';
    }

    function findBuildButtons() {
        return Array.from(document.querySelectorAll('button'))
            .filter(button =>
                button.textContent.trim().includes('Build Blueprint')
            );
    }

    function installBuildButtonHook() {
        const buttons = findBuildButtons();

        for (const button of buttons) {
            if (hookedButtons.has(button)) {
                continue;
            }

            hookedButtons.add(button);

            button.addEventListener('click', event => {
                const result = validateConstruction();

                if (result === 'block') {
                    event.preventDefault();
                    event.stopImmediatePropagation();

                    if (event.nativeEvent) {
                        event.nativeEvent.preventDefault();
                        event.nativeEvent.stopImmediatePropagation();
                    }
                }
            }, true);
        }
    }

    let domObserver = null;

    function startConstructionRestriction() {
        if (domObserver) {
            return;
        }

        installBuildButtonHook();

        domObserver = new MutationObserver(() => {
            installBuildButtonHook();
        });

        domObserver.observe(document.body, {
            childList: true,
            subtree: true
        });

        console.log(
            '[STM Train Pack] Above ground Construction blocked.'
        );
    }

    if (document.body) {
        startConstructionRestriction();
    } else {
        document.addEventListener(
            'DOMContentLoaded',
            startConstructionRestriction,
            { once: true }
        );
    }
})();
n
