import { fetchProfile } from "@/pesayetu/lib/hurumap";

export default async function index(req, res) {
  if (req.method === "GET") {
    try {
      const result = await fetchProfile();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  return res.status(405).end();
}
