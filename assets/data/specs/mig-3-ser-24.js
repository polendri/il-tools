import Q from 'js-quantities';

export default {
  id: 'mig-3-ser-24',
  type: 'MiG-3',
  variant: 'MiG-3 series 24',
  combatDebut: new Date(1941, 7),
  airframe: {
    indicatedStallSpeedRanges: {
      takeoffLanding: [Q('159 km/h'), Q('175 km/h')],
      flight: [Q('134 km/h'), Q('147 km/h')],
    },
    diveSpeedLimit: Q('750 km/h'),
    maxLoadFactor: Q('12.8 gee'),
    stallAngles: {
      landing: Q('15.1 deg'),
      flight: Q('17.3 deg'),
    },
    takeoffSpeedRange: [Q('180 km/h'), Q('200 km/h')],
    glideslopeSpeedRange: [Q('195 km/h'), Q('205 km/h')],
    landingSpeedRange: [Q('135 km/h'), Q('145 km/h')],
    landingAngle: Q('15 deg'),
    length: Q('8.255 m'),
    wingspan: Q('10.2 m'),
    wingSurface: Q('17.44 m^2'),
  },
  characteristics: {
    maxTrueAirspeeds: [
      {
        altitude: Q('0 m'),
        engineMode: 'Nominal',
        speed: Q('493 km/h'),
      },
      {
        altitude: Q('0 m'),
        engineMode: 'Boosted',
        speed: Q('525 km/h'),
      },
      {
        altitude: Q('7600 m'),
        engineMode: 'Nominal',
        speed: Q('626 km/h'),
      },
    ],
    maxPerformance: {
      climb: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          rate: Q('15.9 m/s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          rate: Q('14.0 m/s'),
        },
        {
          altitude: Q('6000 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          rate: Q('10.2 m/s'),
        },
      ],
      turn: [
        {
          altitude: Q('0 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          time: Q('22.4 s'),
        },
        {
          altitude: Q('3000 m'),
          engineMode: 'Boosted',
          speed: Q('270 km/h'),
          time: Q('28.7 s'),
        },
      ],
    },
    serviceCeiling: Q('11800 m'),
    flightEndurance: [
      {
        altitude: Q('3000 m'),
        speed: Q('350 km/h'),
        time: Q('2.5 h'),
      },
    ],
  },
  engine: {
    model: 'AM-35a',
    maxPowers: [
      {
        altitude: Q('0 m'),
        mode: 'Nominal',
        power: Q('1120 hp'),
      },
      {
        altitude: Q('6000 m'),
        mode: 'Nominal',
        power: Q('1200 hp'),
      },
      {
        altitude: Q('0 m'),
        mode: 'Boosted',
        power: Q('1350 hp'),
      },
    ],
    modes: [
      {
        name: 'Nominal',
        limit: null,
        rpm: Q('2050 rpm'),
        manifoldPressure: Q('1040 mmHg'),
      },
      {
        name: 'Boosted',
        limit: Q('10 min'),
        rpm: Q('2050 rpm'),
        manifoldPressure: Q('1240 mmHg'),
      },
    ],
    ratedTemps: [
      {
        name: 'Oil intake',
        range: [Q('40 degC'), Q('80 degC')],
      },
      {
        name: 'Oil output',
        range: [Q('115 degC')],
      },
      {
        name: 'Water',
        range: [Q('80 degC'), Q('110 degC')],
      },
    ],
    maxTemps: [
      {
        name: 'Oil intake',
        value: Q('85 degC'),
      },
      {
        name: 'Oil output',
        value: Q('120 degC'),
      },
      {
        name: 'Water',
        value: Q('120 degC'),
      },
    ],
    superchargerGearShiftAltitude: null,
  },
  load: {
    emptyWeight: Q('2650 kg'),
    minimumWeight: Q('2831 kg'),
    standardWeight: Q('3244 kg'),
    maxTakeoffWeight: Q('3476 kg'),
    fuelLoad: [Q('352 kg'), Q('480 L')],
  },
  armament: {
    forwardFiring: {
      standard: [
        {
          qty: 2,
          name: 'ShKAS',
          type: '7.62mm machine gun',
          count: 750,
          details: null,
        },
        {
          qty: 1,
          name: 'UB',
          type: '12.7mm machine gun',
          count: 300,
          details: 'wing-mounted',
        },
      ],
      modifications: [
        {
          qty: 2,
          name: 'UB',
          type: '12.7mm machine gun',
          count: 135,
          details: 'wing-mounted',
        },
        {
          qty: 2,
          name: 'UB',
          type: '12.7mm machine gun',
          count: 350,
          details: null,
        },
        {
          qty: 2,
          name: 'SsVAK',
          type: '20mm gun',
          count: 150,
          details: null,
        },
      ],
    },
    defensive: [],
    bombs: [
      {
        qty: 2,
        name: 'FAB-50sv',
        type: '50kg general purpose bomb',
        details: null,
      },
      {
        qty: 2,
        name: 'FAB-100M',
        type: '104kg general purpose bomb',
        details: null,
      },
    ],
    rockets: [
      {
        qty: 6,
        name: 'ROS-82',
        type: '7kg rocket',
        details: 'HE payload mass 2.52 kg',
      },
    ],
  },
  features: [
    {
      feature: 'Boost',
      details: ['Engaged by setting mixture to full rich'],
    },
    {
      feature: 'Supercharger',
      details: ['Automatic', 'Single stage'],
    },
    {
      feature: 'Mixture control',
      details: ['Automatic when set to intermediate (50%)'],
    },
    {
      feature: 'Governor',
      details: ['Automatically controls prop pitch to maintain required RPM'],
    },
    {
      feature: 'Oil & water radiator shutters',
      details: ['Manual control'],
    },
    {
      feature: 'Trimmers',
      details: ['Pitch, yaw'],
    },
    {
      feature: 'Automatic wing slats',
      details: ['Deploy automatically at high angle of attack, which makes pre-stall softer'],
    },
    {
      feature: 'Flaps',
      details: [
        'Can only extend fully (no gradual extension)',
        'Can extend up to 50°',
        'At ≥ 220 km/h, airflow may press the flaps upwards',
      ],
    },
    {
      feature: 'Tail wheel',
      details: ['Has control system which engages when rudder is pressed ≥ 40%'],
    },
    {
      feature: 'Wheel brakes',
      details: ['Differential brakes with shared control lever', 'Differential is applied via rudder pedals'],
    },
    {
      feature: 'Canopy',
      details: ['Impossible to open/close at high speed', 'Has no emergency release'],
    },
    {
      feature: 'Salvo controller',
      details: ['Bomb modes: 1, 2', 'Rocket modes: 1, 2, 4'],
    },
  ],
  procedures: {
    startup: [
      'Mixture: Halfway (Auto)',
      'Prop Pitch/RPM: Maximum',
      'Water/Oil Radiators: As required',
      'Throttle: 1”',
      'Press E to start',
    ],
    takeoff: [
      'Mixture: Halfway (Auto)',
      'RPM: Full forward',
      'Water/Oil Radiators: Fully open',
      'Rudder Trim: ¼ turn back',
      'Elevator Trim: Neutral',
      '190 km/h: Rotate',
      'Climb: 290 km/h',
    ],
    landing: [
      {
        text: 'Downwind',
        steps: [
          'Mixture: Halfway (Auto)',
          'MP: 4-500 mmHG',
          'RPM: Full forward',
          'Airspeed: Below 300 km/h',
          'Gear: Extend',
          'Water/Oil Radiators: As required',
        ],
      },
      {
        text: 'End Downwind',
        steps: ['Airspeed: Below 230 km/h', 'Flaps: Extend to full'],
      },
      {
        text: 'Base to Final',
        steps: ['Airspeed: 200 km/h'],
      },
    ],
  },
  trainingVideos: {
    cockpit: 'https://www.youtube.com/watch?v=Zh-6oQF4l9I',
    startup: 'https://www.youtube.com/watch?v=Zh-6oQF4l9I&t=3m',
    takeoff: 'https://www.youtube.com/watch?v=Zh-6oQF4l9I&t=5m8s',
    landing: 'https://www.youtube.com/watch?v=Zh-6oQF4l9I&t=6m58s',
  },
};
