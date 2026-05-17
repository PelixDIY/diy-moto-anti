export const bikeCategories = [
  {
    id: 'motorcycles',
    name: 'Motorcycles',
    models: [
      'yamaha-r15',
      'yamaha-mt-15',
      'yamaha-r25',
      'yamaha-mt-25',
      'honda-cb150x',
      'honda-cb150r',
      'honda-cbr150r',
      'honda-cbr250rr',
      'honda-crf150l',
      'honda-crf250l',
      'kawasaki-ninja-250',
      'kawasaki-zx-25rr',
      'suzuki-v-strom-250'
    ]
  },
  {
    id: 'scooters',
    name: 'Scooters',
    models: ['yamaha-nmax', 'honda-pcx-160', 'honda-adv-160', 'yamaha-xmax']
  }
];

export const bikesData = {
  'yamaha-nmax': {
    id: 'yamaha-nmax',
    name: 'Yamaha NMAX 155',
    category: 'scooters',
    engine_cc: 155,
    image: '/images/bikes/yamaha-nmax.png',
    features: ['reliable', 'city_travel', 'serviceable', 'popular'],
    diagnostics: ['no_start', 'noise_accel', 'vibration'],
    detailed_issues: [
      { id: 'cvt', isWeakSpot: true },
      { id: 'battery' },
      { id: 'electronics' },
      { id: 'gearbox' }
    ],
    service_schedule: {
      oil: '2,000 - 3,000 km',
      filters: '6,000 km',
      drive: '12,000 km'
    },
    detailed_pricing: [
      { item: 'oil_change', price: '150K - 250K IDR' },
      { item: 'cvt_rollers', price: '150K - 250K IDR' },
      { item: 'cvt_belt', price: '300K - 500K IDR' },
      { item: 'battery', price: '250K - 400K IDR' },
      { item: 'diagnosis', price: '100K IDR+' }
    ],
    owner_mistakes: ['ignore_noise', 'late_oil', 'cheap_parts', 'ride_to_break'],
    target_fit: {
      suitable: ['city', 'travel', 'comfort', 'daily'],
      not_suitable: ['offroad', 'aggressive', 'heavy_cargo']
    },
    faq: ['why_jerks', 'why_no_start', 'why_noise', 'why_vibrates', 'oil_interval', 'fuel_type']
  },
  'honda-pcx-160': {
    id: 'honda-pcx-160',
    name: 'Honda PCX 160',
    category: 'scooters',
    engine_cc: 160,
    image: '/images/bikes/honda-pcx-160.png',
    features: ['elegant', 'smooth_ride', 'fuel_efficient', 'premium'],
    diagnostics: ['no_start', 'vibration_start', 'belt_noise'],
    detailed_issues: [
      { id: 'cvt_vibration', isWeakSpot: true },
      { id: 'battery_contacts' },
      { id: 'hiss_system' }
    ],
    service_schedule: {
      oil: '2,500 - 3,500 km',
      filters: '6,000 km',
      drive: '12,000 km'
    },
    detailed_pricing: [
      { item: 'oil_change', price: '180K - 280K IDR' },
      { item: 'cvt_service', price: '200K - 350K IDR' },
      { item: 'battery', price: '300K - 450K IDR' },
      { item: 'diagnosis', price: '100K IDR+' }
    ],
    owner_mistakes: ['late_oil_change', 'cheap_filters', 'ignore_vibration'],
    target_fit: {
      suitable: ['city_premium', 'daily_commute', 'comfort_riding'],
      not_suitable: ['rough_terrain', 'sporty_riding']
    },
    faq: ['why_vibrates', 'oil_type', 'keyless_issues']
  },
  'honda-adv-160': {
    id: 'honda-adv-160',
    name: 'Honda ADV 160',
    category: 'scooters',
    engine_cc: 160,
    image: '/images/bikes/honda-adv-160.png',
    features: ['adventure_style', 'robust_suspension', 'comfortable_posture', 'high_ground_clearance'],
    diagnostics: ['no_start', 'abs_warning', 'suspension_noise'],
    detailed_issues: [
      { id: 'suspension_stiffness', isWeakSpot: true },
      { id: 'cvt_dirt_entry' },
      { id: 'smart_key_range' }
    ],
    service_schedule: {
      oil: '2,500 - 3,500 km',
      filters: '6,000 km',
      drive: '12,000 km'
    },
    detailed_pricing: [
      { item: 'oil_change', price: '180K - 280K IDR' },
      { item: 'suspension_service', price: '400K - 700K IDR' },
      { item: 'cvt_service', price: '200K - 350K IDR' },
      { item: 'diagnosis', price: '100K IDR+' }
    ],
    owner_mistakes: ['offroad_without_prep', 'ignore_cvt_cleaning', 'pressure_wash_electrics'],
    target_fit: {
      suitable: ['bad_roads', 'island_touring', 'tall_riders'],
      not_suitable: ['very_short_riders', 'strict_city_only']
    },
    faq: ['offroad_capability', 'abs_behavior', 'storage_space']
  },
  'yamaha-xmax': {
    id: 'yamaha-xmax',
    name: 'Yamaha XMAX 250',
    category: 'scooters',
    engine_cc: 250,
    image: '/images/bikes/yamaha-xmax.png',
    features: ['powerful_250cc', 'huge_storage', 'traction_control', 'stability'],
    diagnostics: ['no_start', 'tcs_error', 'coolant_leak'],
    detailed_issues: [
      { id: 'coolant_system', isWeakSpot: true },
      { id: 'heavy_weight_handling' },
      { id: 'battery_drain' }
    ],
    service_schedule: {
      oil: '3,000 - 4,000 km',
      filters: '8,000 km',
      drive: '15,000 km'
    },
    detailed_pricing: [
      { item: 'oil_change_synthetic', price: '300K - 500K IDR' },
      { item: 'coolant_flush', price: '200K - 350K IDR' },
      { item: 'cvt_full_service', price: '400K - 600K IDR' },
      { item: 'diagnosis', price: '150K IDR+' }
    ],
    owner_mistakes: ['ignore_coolant_level', 'ride_with_low_tire_pressure', 'overload_storage'],
    target_fit: {
      suitable: ['long_distance', 'highway_riding', 'two_up_riding'],
      not_suitable: ['narrow_alleys', 'beginners_due_to_weight']
    },
    faq: ['fuel_consumption', 'maintenance_cost', 'handling_in_traffic']
  },
  'yamaha-r15': {
    id: 'yamaha-r15',
    name: 'Yamaha YZF-R15',
    category: 'motorcycles',
    engine_cc: 155,
    image: '/images/bikes/yamaha-r15.png',
    features: ['racing_dna', 'vva_engine', 'slipper_clutch', 'sporty_look'],
    diagnostics: ['hard_start', 'clutch_slipping', 'overheating'],
    detailed_issues: [
      { id: 'clutch_wear', isWeakSpot: true },
      { id: 'fairing_vibration' },
      { id: 'chain_slack' }
    ],
    service_schedule: {
      oil: '2,000 - 3,000 km',
      filters: '6,000 km',
      drive: 'Every 500 km (Chain clean)'
    },
    detailed_pricing: [
      { item: 'oil_synthetic', price: '200K - 350K IDR' },
      { item: 'chain_sprocket_kit', price: '600K - 900K IDR' },
      { item: 'clutch_plates', price: '500K - 800K IDR' },
      { item: 'diagnosis', price: '100K IDR+' }
    ],
    owner_mistakes: ['improper_chain_lube', 'aggressive_shifting', 'track_riding_without_service'],
    target_fit: {
      suitable: ['sport_enthusiasts', 'track_days', 'speed_lovers'],
      not_suitable: ['long_touring_comfort', 'carrying_passengers', 'back_pain_sufferers']
    },
    faq: ['top_speed', 'vva_activation', 'riding_position']
  },
  'yamaha-mt-15': {
    id: 'yamaha-mt-15', name: 'Yamaha MT-15', category: 'motorcycles', engine_cc: 155, image: '/images/bikes/yamaha-mt-15.png',
    features: ['aggressive_look', 'upright_posture', 'torque', 'agile'],
    diagnostics: ['hard_start', 'chain_noise', 'clutch_slipping'],
    detailed_issues: [{ id: 'chain_slack', isWeakSpot: true }, { id: 'clutch_wear' }, { id: 'headlight_vibration' }],
    service_schedule: { oil: '2,000 - 3,000 km', filters: '6,000 km', drive: 'Every 500 km (Chain clean)' },
    detailed_pricing: [{ item: 'oil_synthetic', price: '200K - 350K IDR' }, { item: 'chain_sprocket', price: '600K - 900K IDR' }],
    owner_mistakes: ['improper_chain_lube', 'aggressive_starts'],
    target_fit: { suitable: ['city_traffic', 'stunt_beginners'], not_suitable: ['long_touring', 'carrying_passengers'] },
    faq: ['top_speed', 'riding_position']
  },
  'yamaha-r25': {
    id: 'yamaha-r25', name: 'Yamaha R25', category: 'motorcycles', engine_cc: 250, image: '/images/bikes/yamaha-r25.png',
    features: ['twin_cylinder', 'high_revs', 'stability', 'sporty_look'],
    diagnostics: ['overheating', 'water_pump_leak', 'fork_leak'],
    detailed_issues: [{ id: 'water_pump', isWeakSpot: true }, { id: 'stator_failure' }, { id: 'fork_seals' }],
    service_schedule: { oil: '3,000 - 4,000 km', filters: '8,000 km', drive: 'Every 500 km (Chain clean)' },
    detailed_pricing: [{ item: 'oil_synthetic', price: '300K - 500K IDR' }, { item: 'water_pump_rebuild', price: '400K - 700K IDR' }],
    owner_mistakes: ['ignore_coolant', 'late_oil_change'],
    target_fit: { suitable: ['highway_riding', 'track_days'], not_suitable: ['dense_traffic', 'offroad'] },
    faq: ['fuel_consumption', 'maintenance_cost']
  },
  'yamaha-mt-25': {
    id: 'yamaha-mt-25', name: 'Yamaha MT-25', category: 'motorcycles', engine_cc: 250, image: '/images/bikes/yamaha-mt-25.png',
    features: ['hyper_naked', 'master_torque', 'nimble', 'twin_cylinder'],
    diagnostics: ['overheating', 'electrical_issue', 'chain_noise'],
    detailed_issues: [{ id: 'radiator_fan', isWeakSpot: true }, { id: 'rectifier' }, { id: 'chain_wear' }],
    service_schedule: { oil: '3,000 - 4,000 km', filters: '8,000 km', drive: 'Every 500 km (Chain clean)' },
    detailed_pricing: [{ item: 'oil_synthetic', price: '300K - 500K IDR' }, { item: 'electrical_diag', price: '150K - 300K IDR' }],
    owner_mistakes: ['ignore_temp_gauge', 'cheap_chain'],
    target_fit: { suitable: ['city_commuting', 'weekend_rides'], not_suitable: ['offroad', 'long_touring'] },
    faq: ['fuel_consumption', 'top_speed']
  },
  'honda-cb150x': {
    id: 'honda-cb150x', name: 'Honda CB150X', category: 'motorcycles', engine_cc: 150, image: '/images/bikes/honda-cb150x.png',
    features: ['touring_ready', 'wind_protection', 'long_travel', 'comfortable'],
    diagnostics: ['engine_noise', 'chain_slack', 'hard_start'],
    detailed_issues: [{ id: 'timing_chain', isWeakSpot: true }, { id: 'valve_clearance' }, { id: 'box_mounts' }],
    service_schedule: { oil: '2,000 - 3,000 km', filters: '6,000 km', drive: 'Every 500 km (Chain clean)' },
    detailed_pricing: [{ item: 'oil_change', price: '150K - 250K IDR' }, { item: 'timing_chain_tensioner', price: '250K - 400K IDR' }],
    owner_mistakes: ['overloading', 'ignore_valve_noise'],
    target_fit: { suitable: ['island_touring', 'bad_roads'], not_suitable: ['aggressive_offroad', 'high_speed_highway'] },
    faq: ['top_speed', 'seat_height']
  },
  'honda-cb150r': {
    id: 'honda-cb150r', name: 'Honda CB150R', category: 'motorcycles', engine_cc: 150, image: '/images/bikes/honda-cb150r.png',
    features: ['neo_sports_cafe', 'led_lighting', 'compact', 'agile'],
    diagnostics: ['engine_rattle', 'electrical_issue', 'chain_slack'],
    detailed_issues: [{ id: 'chain_tensioner', isWeakSpot: true }, { id: 'water_pump' }, { id: 'battery_drain' }],
    service_schedule: { oil: '2,000 - 3,000 km', filters: '6,000 km', drive: 'Every 500 km (Chain clean)' },
    detailed_pricing: [{ item: 'oil_change', price: '150K - 250K IDR' }, { item: 'chain_tensioner', price: '250K - 400K IDR' }],
    owner_mistakes: ['ignore_engine_noise', 'cheap_oil'],
    target_fit: { suitable: ['city_riding', 'beginners'], not_suitable: ['offroad', 'long_touring'] },
    faq: ['fuel_consumption', 'maintenance_cost']
  },
  'honda-cbr150r': {
    id: 'honda-cbr150r', name: 'Honda CBR150R', category: 'motorcycles', engine_cc: 150, image: '/images/bikes/honda-cbr150r.png',
    features: ['total_control', 'aerodynamic', 'reliable_honda', 'sporty'],
    diagnostics: ['clutch_slipping', 'fairing_rattle', 'hard_start'],
    detailed_issues: [{ id: 'clutch_wear', isWeakSpot: true }, { id: 'fairing_clips' }, { id: 'chain_wear' }],
    service_schedule: { oil: '2,000 - 3,000 km', filters: '6,000 km', drive: 'Every 500 km (Chain clean)' },
    detailed_pricing: [{ item: 'oil_change', price: '150K - 250K IDR' }, { item: 'clutch_plates', price: '400K - 600K IDR' }],
    owner_mistakes: ['aggressive_shifting', 'poor_chain_lube'],
    target_fit: { suitable: ['sport_beginners', 'city_commuting'], not_suitable: ['offroad', 'long_touring'] },
    faq: ['top_speed', 'riding_position']
  },
  'honda-cbr250rr': {
    id: 'honda-cbr250rr', name: 'Honda CBR250RR', category: 'motorcycles', engine_cc: 250, image: '/images/bikes/honda-cbr250rr.png',
    features: ['ride_by_wire', 'riding_modes', 'pro_suspension', 'quickshifter_ready'],
    diagnostics: ['throttle_error', 'no_start', 'overheating'],
    detailed_issues: [{ id: 'throttle_sensor', isWeakSpot: true }, { id: 'battery_drain' }, { id: 'chain_wear' }],
    service_schedule: { oil: '3,000 - 4,000 km', filters: '8,000 km', drive: 'Every 500 km (Chain clean)' },
    detailed_pricing: [{ item: 'oil_synthetic', price: '350K - 550K IDR' }, { item: 'throttle_body_sync', price: '300K - 500K IDR' }],
    owner_mistakes: ['ignore_error_codes', 'cheap_fuel'],
    target_fit: { suitable: ['track_days', 'highway_riding'], not_suitable: ['dense_traffic', 'offroad'] },
    faq: ['fuel_consumption', 'riding_modes_diff']
  },
  'honda-crf150l': {
    id: 'honda-crf150l', name: 'Honda CRF150L', category: 'motorcycles', engine_cc: 150, image: '/images/bikes/honda-crf150l.png',
    features: ['offroad_king', 'lightweight', 'durable', 'long_travel'],
    diagnostics: ['clutch_slipping', 'wheel_wobble', 'hard_start'],
    detailed_issues: [{ id: 'clutch_wear', isWeakSpot: true }, { id: 'loose_spokes' }, { id: 'dirty_carb' }],
    service_schedule: { oil: '1,500 - 2,500 km', filters: 'Frequent clean', drive: 'Every offroad ride' },
    detailed_pricing: [{ item: 'oil_change', price: '120K - 200K IDR' }, { item: 'clutch_plates', price: '400K - 600K IDR' }, { item: 'wheel_truing', price: '100K - 200K IDR' }],
    owner_mistakes: ['half_clutch_offroad', 'ignore_air_filter', 'ignore_spokes'],
    target_fit: { suitable: ['offroad', 'dirt_trails', 'tall_riders'], not_suitable: ['highway_touring', 'short_riders'] },
    faq: ['top_speed', 'seat_height']
  },
  'honda-crf250l': {
    id: 'honda-crf250l', name: 'Honda CRF250L', category: 'motorcycles', engine_cc: 250, image: '/images/bikes/honda-crf250l.png',
    features: ['true_adventure', 'powerful_single', 'long_suspension', 'liquid_cooled'],
    diagnostics: ['engine_rattle', 'overheating', 'suspension_leak'],
    detailed_issues: [{ id: 'timing_chain', isWeakSpot: true }, { id: 'radiator_damage' }, { id: 'fork_seals' }],
    service_schedule: { oil: '3,000 - 4,000 km', filters: 'Frequent clean', drive: 'Every offroad ride' },
    detailed_pricing: [{ item: 'oil_synthetic', price: '250K - 400K IDR' }, { item: 'fork_rebuild', price: '500K - 800K IDR' }],
    owner_mistakes: ['no_skid_plate', 'ignore_coolant'],
    target_fit: { suitable: ['adventure_touring', 'offroad', 'tall_riders'], not_suitable: ['city_commuting', 'short_riders'] },
    faq: ['weight', 'fuel_consumption']
  },
  'kawasaki-ninja-250': {
    id: 'kawasaki-ninja-250', name: 'Kawasaki Ninja 250', category: 'motorcycles', engine_cc: 250, image: '/images/bikes/kawasaki-ninja-250.png',
    features: ['legendary', 'parallel_twin', 'sharp_look', 'highway_cruiser'],
    diagnostics: ['overheating', 'rough_idle', 'brake_fade'],
    detailed_issues: [{ id: 'cooling_fan', isWeakSpot: true }, { id: 'throttle_sync' }, { id: 'brake_discs' }],
    service_schedule: { oil: '3,000 - 4,000 km', filters: '8,000 km', drive: 'Every 500 km' },
    detailed_pricing: [{ item: 'oil_synthetic', price: '300K - 500K IDR' }, { item: 'throttle_sync', price: '300K - 500K IDR' }],
    owner_mistakes: ['traffic_jam_overheating', 'ignore_brake_fluid'],
    target_fit: { suitable: ['highway_touring', 'sport_riding'], not_suitable: ['heavy_traffic', 'offroad'] },
    faq: ['top_speed', 'riding_position']
  },
  'kawasaki-zx-25rr': {
    id: 'kawasaki-zx-25rr', name: 'Kawasaki ZX-25RR', category: 'motorcycles', engine_cc: 250, image: '/images/bikes/kawasaki-zx-25rr.png',
    features: ['inline_four', 'quickshifter', 'screamer', 'premium_suspension'],
    diagnostics: ['check_engine', 'tire_wear', 'high_fuel_consumption'],
    detailed_issues: [{ id: 'electronics_glitch', isWeakSpot: true }, { id: 'tire_wear' }, { id: 'chain_stretch' }],
    service_schedule: { oil: '2,500 - 3,500 km', filters: '6,000 km', drive: 'Every 400 km' },
    detailed_pricing: [{ item: 'oil_synthetic_premium', price: '450K - 700K IDR' }, { item: 'tire_replacement', price: '1M - 2M IDR' }],
    owner_mistakes: ['cheap_oil', 'ignore_chain_slack', 'wrong_fuel'],
    target_fit: { suitable: ['track_days', 'pure_sport', 'sound_lovers'], not_suitable: ['daily_commuting', 'budget_riders'] },
    faq: ['fuel_consumption', 'maintenance_cost']
  },
  'suzuki-v-strom-250': {
    id: 'suzuki-v-strom-250', name: 'Suzuki V-Strom 250 SX', category: 'motorcycles', engine_cc: 250, image: '/images/bikes/suzuki-v-strom-250.png',
    features: ['all_rounder', 'comfortable', 'practical', 'oil_cooled'],
    diagnostics: ['hard_start', 'chain_noise', 'weak_headlight'],
    detailed_issues: [{ id: 'top_heavy', isWeakSpot: true }, { id: 'headlight_brightness' }, { id: 'chain_wear' }],
    service_schedule: { oil: '3,000 - 4,000 km', filters: '8,000 km', drive: 'Every 500 km' },
    detailed_pricing: [{ item: 'oil_change', price: '250K - 400K IDR' }, { item: 'chain_kit', price: '700K - 1M IDR' }],
    owner_mistakes: ['drop_at_low_speed', 'ignore_oil_cooler'],
    target_fit: { suitable: ['island_touring', 'comfortable_commuting', 'tall_riders'], not_suitable: ['aggressive_offroad', 'short_riders'] },
    faq: ['seat_height', 'offroad_capability']
  }
};
