db.trips.aggregate([
  {
    $group: {
      _id: {
        $dayOfWeek: "$startTime",
      },
      quantidade: { $sum: 1 },
    },
  },
  {
    $sort: { quantidade: -1 },
  },
  {
    $limit: 1,
  },
  {
    $project: {
      diaDaSemana: "$_id",
      total: "$quantidade",
      _id: 0,
    },
  },
]);
