import express from 'express';
import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentController';

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentController.getAllStudent);
router.get('/students/:major', StudentController.getAllStudentByMajor);

export default router;
