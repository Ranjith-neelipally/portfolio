export type AdminAction =
| { type: "FETCH_SUCCESS"; payload: { adminName: string; profilePhoto: string } }
| { type: "FETCH_FAIL"; payload: string };