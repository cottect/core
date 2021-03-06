global.$ = global.jQuery = $;

const imagesContext = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
imagesContext.keys().forEach(imagesContext);

// loads the Bootstrap jQuery plugins
import 'bootstrap/dist/js/bootstrap';

import 'datatables.net/js/jquery.dataTables.min.js';
import 'chart.js/dist/Chart.min.js';
import 'chart.js/dist/Chart.min.css';

import 'startbootstrap-sb-admin-2/js/sb-admin-2.min';


// loads the code syntax highlighting library
import './highlight.js';

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll('img').forEach(function(img){
        img.onerror = function(){this.style.display='none';};
    })
});
