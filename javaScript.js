;(function() {
    function AddYourOwnTab() {
        var self = this;
        this.tabs = document.querySelector('#tabs');
        this.nameTab = document.querySelector('.title');
        this.btn = document.querySelector('#add');
        this.content = document.querySelector('.content');
        this.errorTitle = document.querySelector('.ttl');
        this.errorContent = document.querySelector('.cnt');
        this.collapseBtn = document.querySelector('#collapse');
        this.btn.addEventListener('click', function(event) {
            self.addTab();
        });

        this.tabs.addEventListener('click', function(event) {
            var target = event.target;

            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }
           self.showActiveTab(target);
        });

        this.collapseBtn.addEventListener('click', function(event){
            self.collapse(".left-column");
        });
    }


        AddYourOwnTab.prototype.widthRightColumn = function(className){
            var rc = document.querySelector(className);
            rc.classList.toggle('width');
        };


        AddYourOwnTab.prototype.collapse = function(className){
            var lc = document.querySelector(className);
            lc.classList.toggle('hide');

            this.widthRightColumn('.right-column');
        };


        AddYourOwnTab.prototype.checking = function(elem, container, error){
            if (elem.value.length === 0){
                error.classList.remove('error');
                error.classList.add('errorShow');
                return false;
            } else {
                error.classList.add('error');
                container.innerHTML = elem.value;
            }
        };


        AddYourOwnTab.prototype.addTab = function(){
            var tab = document.createDocumentFragment(),

                title = document.createElement('li'),
                link = document.createElement('a'),
                cont = document.createElement('div');

            link.href = '#';

            if (this.checking(this.nameTab, link, this.errorTitle) === false || this.checking(this.content, cont, this.errorContent) === false){
                return false;
            }

            this.hidePreviousTabs();

            link.classList.add('link');
            cont.classList.add('para');

            title.appendChild(link);
            title.appendChild(cont);


            tab.appendChild(title);

            this.tabs.appendChild(tab);
        };


        AddYourOwnTab.prototype.hidePreviousTabs = function(){
            var para = document.getElementsByClassName("para");
            for(var j = 0; j < para.length; j++) {
                para[j].classList.add("hide");
            }
        };


        AddYourOwnTab.prototype.showActiveTab = function(tab){
            this.hidePreviousTabs();
            var tabContent = tab.nextElementSibling;
            tabContent.classList.remove('hide');
        };

        var addYourOwnTab = new AddYourOwnTab();
}());
