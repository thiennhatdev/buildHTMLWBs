import fixedfooter from './modules/fixedfooter';
import bgimg from './core/bgimg';
import  listtoselect from './core/listtoselect';
import  back2top from './core/back2top';

$(document).ready(function() {
	bgimg.bgResponsive();
	listtoselect.listSelect();
	back2top.backTop();
});


