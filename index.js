// STM Train Pack
(function () {
	// Montréal Rubber Metro
		window.SubwayBuilderAPI.trains.modifyTrainType('heavy-metro', {
		name: 'MPM-10 Azur',
		description: 'Can only be used underground because of the weather. Newer Montréal Metro with open-gangway construction.',
		stats: {
			maxSpeed: 20.1,             // m/s (≈72 kph)
			maxAcceleration: 1.21,
			accelerationCurve: { a0: 1.21, a1: 1.15, v1: 11, v2: 20, exponent: 1.6},
			maxDeceleration: 1.23,
			maxLateralAcceleration: 0.9,
			maxCantMm: 160,
			maxCantDeficiencyMm: 135,
			maxSlopePercentage: 6.5,
			maxSpeedLocalStation: 13.88, // m/s (≈50 kph)
			crossoverSpeed: 6.95,        // m/s (≈25 kph)
			yardSpeedLimit: 6.95,        // m/s (≈25 kph)
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
			carCost: 1_350_000,
			baseTrackCost: 28_750,
			baseStationCost: 62_300_000,
			trainOperationalCostPerHour: 220,
			carOperationalCostPerHour: 32.5,
			trackMaintenanceCostPerMeter: 200,
			stationMaintenanceCostPerYear: 235_000,
			tphLimit: 38,
		},
		elevationMultipliers: {
			DEEP_BORE: 3.5,
			STANDARD_TUNNEL: 1.8,
			CUT_AND_COVER: 1,
			AT_GRADE: 100,
			ELEVATED: 100,
			TRENCHED: 100,
			RAMP: 100
		},
		compatibleTrackTypes: ['heavy-metro', 'mr73'],
		appearance: {color: '#009EE0', bodyColor: '#00A3E0', couplerWidthMultiplier: 2 },
		portalCost: 500_000_000_000,
		rampCost: 500_000_000_000,
		maxOverpassSpan: 5,
});
	window.SubwayBuilderAPI.trains.registerTrainType({
		id: 'mr73',
		name: 'MR-73',
		description: 'Can only be used underground because of the weather. The oldest metro used in Montreal, refurbished in 2006.',
		stats: {
			maxSpeed: 20.1,             // m/s (≈72 kph)
			maxAcceleration: 1.43,
			accelerationCurve: { a0: 1.43, a1: 1.1, v1: 8.5, v2: 14, exponent: 1.7},
			maxDeceleration: 1.35,
			maxLateralAcceleration: 0.9,
			maxCantMm: 160,
			maxCantDeficiencyMm: 135,
			maxSlopePercentage: 6.5,
			maxSpeedLocalStation: 13.88, // m/s (≈50 kph)
			crossoverSpeed: 6.95,        // m/s (≈25 kph)
			yardSpeedLimit: 6.95,        // m/s (≈25 kph)
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
		elevationMultipliers: {
			DEEP_BORE: 3.5,
			STANDARD_TUNNEL: 1.8,
			CUT_AND_COVER: 1,
			AT_GRADE: 100,
			ELEVATED: 100,
			TRENCHED: 100,
			RAMP: 100
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
			maxSpeedLocalStation: 27.78   , // m/s
	},
});
	/// EXO Trains
	window.SubwayBuilderAPI.trains.modifyTrainType('commuter-rail', {
		name: 'ALP-45DP+MultiLevel',
		description: 'Dual-mode electric and diesel locomotive with MultiLevel cars',
		stats: {
			maxSpeed: 44.44,              // m/s (≈160 kph)
			maxAcceleration: 0.76,
			accelerationCurve: { a0: 0.85, a1: 0.8, v1: 15, v2: 17.8, exponent: 1.4},
			maxDeceleration: 0.8,
			maxSpeedLocalStation: 44.44, // m/s (≈160 kph)
			crossoverSpeed: 6.95,        // m/s (≈25 kph)
			yardSpeedLimit: 6.95,        // m/s (≈25 kph)
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
			trainOperationalCostPerHour: 680, // Higher because dual-mode
			carOperationalCostPerHour: 45,
			trackMaintenanceCostPerMeter: 300,
			stationMaintenanceCostPerYear: 280_000,
			tphLimit: 23,
		},
		compatibleTrackTypes: ['commuter-rail', 'commuter-rail-diesel'],
		appearance: {roofStyle: 'boxy', bodyColor: '#FFFFFF', couplerWidthMultiplier: 1.5, catenary: true},
		allowGradeCrossing: true,
		gradeCrossingTphLimit: {
			highway: null,
			major: 8,
			medium: 12,
			minor: 23,
		},
	});
	window.SubwayBuilderAPI.trains.modifyTrainType('commuter-rail-diesel', {
		name: 'EC-43+Multilevel',
		description: 'Siemens Charger Diesel Locomotive with MultiLevel cars',
		stats: {
			maxSpeed: 35.76,              // m/s (≈128 kph)
			maxAcceleration: 0.5,
			accelerationCurve: { a0: 0.6, a1: 0.49, v1: 6.5, v2: 15, exponent: 1.7},
			maxDeceleration: 1.34,
			maxSpeedLocalStation: 35.76, // m/s (≈128 kph)
			crossoverSpeed: 6.95,        // m/s (≈25 kph)
			yardSpeedLimit: 6.95,        // m/s (≈25 kph)
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
			carCost: 3_300_000,
			baseStationCost: 45_000_000,
			trainOperationalCostPerHour: 650,
			carOperationalCostPerHour: 45,
			trackMaintenanceCostPerMeter: 220,
			stationMaintenanceCostPerYear: 260_000,
			tphLimit: 23,
		},
		compatibleTrackTypes: ['commuter-rail-diesel', 'commuter-rail'],
		appearance: {roofStyle: 'boxy', bodyColor: '#FFFFFF', couplerWidthMultiplier: 1.5},
		allowGradeCrossing: true,
		gradeCrossingTphLimit: {
			highway: null,
			major: 8,
			medium: 12,
			minor: 23,
		},
	});
	window.SubwayBuilderAPI.trains.modifyTrainType('light-rail', {
		name: 'Citadis Spirit',
		description: 'Modern Light Rail vehicle from Alstom for the North American market.',
	appearance: {roofStyle: 'boxy', bodyColor: '#AEB0AD', couplerWidthMultiplier: 1.5, catenary: true},
	portalCost: 8_000_000,
	rampCost: 3_000_000,
	});
	window.SubwayBuilderAPI.trains.modifyTrainType('light-rail', {
		name: 'Flexity Freedom',
		description: 'Streetcar from Bombardier/Alstom. Shares road space with traffic, subject to road speed limits and intersection signals.',
		stats: {
			minCars: 5,
			maxCars: 7,
			capacityPerCar: 45,
			seatsPerCar: 12,
			doorsPerCarPerSide: 1,
			carLength: 6.3,
			minStationLength: 36,
			maxStationLength: 50,
			carOperationalCostPerHour: 9,
		},
		appearance: {roofStyle: 'rounded', bodyColor: '#AEB0AD', couplerWidthMultiplier: 1.5, catenary: true},
		portalCost: 6_000_000,
		rampCost: 2_750_000,
		gradeCrossingSpeedLimitApproachDistance: 50,
		maxOverpassSpan: 50,
	});
})();
