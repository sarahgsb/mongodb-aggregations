db.trips.aggregate([
  {
    $group: {
      _id: {
        day: { $dayOfWeek: "$startTime" },
        stationName: "$startStationName",
      },
      totalDeViagens: { $sum: 1 },
    },
  },
  { $sort: { totalDeViagens: -1 } },
  { $limit: 1 },
  {
    $project: {
      nomeEstacao: "$_id.stationName",
      total: "$totalDeViagens",
      _id: 0,
    },
  },
]);
