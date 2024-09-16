import type { Response } from "express";

export function successResponse(
  res: Response,
  data: any,
  message: string = "Success"
) {
  return res.status(200).json({ success: true, message, data });
}

export function errorResponse(res: Response, status: number, error: string) {
  return res.status(status).json({ success: false, error });
}
