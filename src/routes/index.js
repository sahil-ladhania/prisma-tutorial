const express = require('express');
const router = express.Router();

// Import all category routes
const category1Routes = require('./category1_basic_select_and_where');
const category2Routes = require('./category2_complex_where');
const category3Routes = require('./category3_sorting');
const category4Routes = require('./category4_pagination');
const category5Routes = require('./category5_aggregations');
const category6Routes = require('./category6_group_by');
const category7Routes = require('./category7_group_by_having');
const category8Routes = require('./category8_single_joins');
const category9Routes = require('./category9_multiple_joins');
const category10Routes = require('./category10_nested_joins');
const category11Routes = require('./category11_distinct');
const category12Routes = require('./category12_complex_filtering_joins');
const category13Routes = require('./category13_aggregations_joins');
const category14Routes = require('./category14_subqueries');
const category15Routes = require('./category15_exists_patterns');
const category16Routes = require('./category16_date_time');
const category17Routes = require('./category17_null_handling');
const category18Routes = require('./category18_crud');
const category19Routes = require('./category19_transactions');
const category20Routes = require('./category20_bulk_operations');
const category21Routes = require('./category21_search');
const category22Routes = require('./category22_conditional_logic');
const category23Routes = require('./category23_business_logic');

// Use category routes
router.use('/api', category1Routes);
router.use('/api', category2Routes);
router.use('/api', category3Routes);
router.use('/api', category4Routes);
router.use('/api', category5Routes);
router.use('/api', category6Routes);
router.use('/api', category7Routes);
router.use('/api', category8Routes);
router.use('/api', category9Routes);
router.use('/api', category10Routes);
router.use('/api', category11Routes);
router.use('/api', category12Routes);
router.use('/api', category13Routes);
router.use('/api', category14Routes);
router.use('/api', category15Routes);
router.use('/api', category16Routes);
router.use('/api', category17Routes);
router.use('/api', category18Routes);
router.use('/api', category19Routes);
router.use('/api', category20Routes);
router.use('/api', category21Routes);
router.use('/api', category22Routes);
router.use('/api', category23Routes);

module.exports = router;