import {Router,Request,Response,NextFunction } from 'express'
import { restaurnatsDetails } from '../database/Restaurant';
import { ADMIN_MESSAGE } from './admin.contants';

import adminService from './admin.service';
const router = Router()

export default router