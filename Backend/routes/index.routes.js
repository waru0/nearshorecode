import { Router } from "express";
const router = Router();
router.use( "/api/loan", require( "./loan.routes" ).default );
router.use( "/api/payments", require( "./payments.routes" ).default );
router.use( "/api/information", require( "./information.routes" ).default );
export default router;
