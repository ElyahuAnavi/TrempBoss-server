// index.js
import express from 'express';
import userRoutes from './resources/users/UserRoutes';
import adminRoutes from './resources/adminUsers/AdminRoutes';
import trempRoutes from './resources/tremps/TrempRoutes';
import groupRoutes from './resources/groups/GroupRoutes';
import kpiRoutes from './resources/kpis/KpiRoutes';
import userGroupsRoutes from './resources/usersGroups/UserGroupsRoutes';
import groupRequestRoutes from './resources/groupRequest/GroupRequestRoutes';

const router = express.Router();

//main api routes
router.use('/users', userRoutes);
router.use('/adminUsers', adminRoutes);
router.use('/tremps', trempRoutes);
router.use('/groups', groupRoutes);
router.use('/user-groups', userGroupsRoutes);
router.use('/group-request', groupRequestRoutes);
router.use('/kpis', kpiRoutes);

export default router;







