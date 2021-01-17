let servers = [
  { id: "1", name: "AWS", status: "working" },
  { id: "2", name: "Google", status: "working" },
  { id: "3", name: "Yahoo", status: "working" },
  { id: "4", name: "Microsoft", status: "pending" },
];

export const getAll = (req, res) => {
  res.status(200).json(servers);
};
