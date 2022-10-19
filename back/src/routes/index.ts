import { Router } from 'express';
// const { Router } = require('express');
const router: Router = Router();


// router.get('/',(req: Request,res: Response) => res.send('Bienvenido al backend de este precioso proyecto!'));
router.use('/client', require('./client'));
// router.use('/authors', require('./authors'));
// router.use('/categories', require('./categories'));
// router.use('/user', require('./user'));
// router.use('/reviews', require('./reviews'));
// router.use('/payments', require('./payments'));
// router.use('/mercadopago', require('./paymentMP'));
// router.use('/publisher', require('./publisher'));
// router.use('/payment-method', require('./paymentMethod'));

module.exports = router;
