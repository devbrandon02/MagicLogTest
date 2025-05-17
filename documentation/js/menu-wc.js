'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">magic-log-technical-test documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d941c39fca2a89c7c2606490194c7d316ec0c7f60d995e25ca59de9ccd518f46e5c4b7286223184f7b91dbb0cd1e6aa5e59ac07f86005b3a25ea7de703b2789f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d941c39fca2a89c7c2606490194c7d316ec0c7f60d995e25ca59de9ccd518f46e5c4b7286223184f7b91dbb0cd1e6aa5e59ac07f86005b3a25ea7de703b2789f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d941c39fca2a89c7c2606490194c7d316ec0c7f60d995e25ca59de9ccd518f46e5c4b7286223184f7b91dbb0cd1e6aa5e59ac07f86005b3a25ea7de703b2789f"' :
                                            'id="xs-controllers-links-module-AppModule-d941c39fca2a89c7c2606490194c7d316ec0c7f60d995e25ca59de9ccd518f46e5c4b7286223184f7b91dbb0cd1e6aa5e59ac07f86005b3a25ea7de703b2789f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d941c39fca2a89c7c2606490194c7d316ec0c7f60d995e25ca59de9ccd518f46e5c4b7286223184f7b91dbb0cd1e6aa5e59ac07f86005b3a25ea7de703b2789f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d941c39fca2a89c7c2606490194c7d316ec0c7f60d995e25ca59de9ccd518f46e5c4b7286223184f7b91dbb0cd1e6aa5e59ac07f86005b3a25ea7de703b2789f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d941c39fca2a89c7c2606490194c7d316ec0c7f60d995e25ca59de9ccd518f46e5c4b7286223184f7b91dbb0cd1e6aa5e59ac07f86005b3a25ea7de703b2789f"' :
                                        'id="xs-injectables-links-module-AppModule-d941c39fca2a89c7c2606490194c7d316ec0c7f60d995e25ca59de9ccd518f46e5c4b7286223184f7b91dbb0cd1e6aa5e59ac07f86005b3a25ea7de703b2789f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-3993ea3f86aadbc01c9a21162e6212cf3e4de20509e9d35f54f41d55b7e32b44c2d10eccf5856396d426814523a2a70268b54a860f444b6ce027a1aa54a1d12a"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-3993ea3f86aadbc01c9a21162e6212cf3e4de20509e9d35f54f41d55b7e32b44c2d10eccf5856396d426814523a2a70268b54a860f444b6ce027a1aa54a1d12a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-3993ea3f86aadbc01c9a21162e6212cf3e4de20509e9d35f54f41d55b7e32b44c2d10eccf5856396d426814523a2a70268b54a860f444b6ce027a1aa54a1d12a"' :
                                            'id="xs-controllers-links-module-AuthModule-3993ea3f86aadbc01c9a21162e6212cf3e4de20509e9d35f54f41d55b7e32b44c2d10eccf5856396d426814523a2a70268b54a860f444b6ce027a1aa54a1d12a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-3993ea3f86aadbc01c9a21162e6212cf3e4de20509e9d35f54f41d55b7e32b44c2d10eccf5856396d426814523a2a70268b54a860f444b6ce027a1aa54a1d12a"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-3993ea3f86aadbc01c9a21162e6212cf3e4de20509e9d35f54f41d55b7e32b44c2d10eccf5856396d426814523a2a70268b54a860f444b6ce027a1aa54a1d12a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-3993ea3f86aadbc01c9a21162e6212cf3e4de20509e9d35f54f41d55b7e32b44c2d10eccf5856396d426814523a2a70268b54a860f444b6ce027a1aa54a1d12a"' :
                                        'id="xs-injectables-links-module-AuthModule-3993ea3f86aadbc01c9a21162e6212cf3e4de20509e9d35f54f41d55b7e32b44c2d10eccf5856396d426814523a2a70268b54a860f444b6ce027a1aa54a1d12a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductModule-165fac3950ac5b2bd42785f4c4768cce7afe00f3f4357d5fb7841dc46d5e88f209d4eb8c5abef6eabb3bd01f81c81b05a1f64c22b36d9988d311b4876990b48c"' : 'data-bs-target="#xs-controllers-links-module-ProductModule-165fac3950ac5b2bd42785f4c4768cce7afe00f3f4357d5fb7841dc46d5e88f209d4eb8c5abef6eabb3bd01f81c81b05a1f64c22b36d9988d311b4876990b48c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-165fac3950ac5b2bd42785f4c4768cce7afe00f3f4357d5fb7841dc46d5e88f209d4eb8c5abef6eabb3bd01f81c81b05a1f64c22b36d9988d311b4876990b48c"' :
                                            'id="xs-controllers-links-module-ProductModule-165fac3950ac5b2bd42785f4c4768cce7afe00f3f4357d5fb7841dc46d5e88f209d4eb8c5abef6eabb3bd01f81c81b05a1f64c22b36d9988d311b4876990b48c"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-165fac3950ac5b2bd42785f4c4768cce7afe00f3f4357d5fb7841dc46d5e88f209d4eb8c5abef6eabb3bd01f81c81b05a1f64c22b36d9988d311b4876990b48c"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-165fac3950ac5b2bd42785f4c4768cce7afe00f3f4357d5fb7841dc46d5e88f209d4eb8c5abef6eabb3bd01f81c81b05a1f64c22b36d9988d311b4876990b48c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-165fac3950ac5b2bd42785f4c4768cce7afe00f3f4357d5fb7841dc46d5e88f209d4eb8c5abef6eabb3bd01f81c81b05a1f64c22b36d9988d311b4876990b48c"' :
                                        'id="xs-injectables-links-module-ProductModule-165fac3950ac5b2bd42785f4c4768cce7afe00f3f4357d5fb7841dc46d5e88f209d4eb8c5abef6eabb3bd01f81c81b05a1f64c22b36d9988d311b4876990b48c"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-194bb47b72106da4a60a9cf5560153b9d33033bc9a2956ae0f8b9eb4f28a981990499c93507560416198a71737434c1ab7ba798c5bb336b58f92563ee6f8f69b"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-194bb47b72106da4a60a9cf5560153b9d33033bc9a2956ae0f8b9eb4f28a981990499c93507560416198a71737434c1ab7ba798c5bb336b58f92563ee6f8f69b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-194bb47b72106da4a60a9cf5560153b9d33033bc9a2956ae0f8b9eb4f28a981990499c93507560416198a71737434c1ab7ba798c5bb336b58f92563ee6f8f69b"' :
                                            'id="xs-controllers-links-module-UsersModule-194bb47b72106da4a60a9cf5560153b9d33033bc9a2956ae0f8b9eb4f28a981990499c93507560416198a71737434c1ab7ba798c5bb336b58f92563ee6f8f69b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-194bb47b72106da4a60a9cf5560153b9d33033bc9a2956ae0f8b9eb4f28a981990499c93507560416198a71737434c1ab7ba798c5bb336b58f92563ee6f8f69b"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-194bb47b72106da4a60a9cf5560153b9d33033bc9a2956ae0f8b9eb4f28a981990499c93507560416198a71737434c1ab7ba798c5bb336b58f92563ee6f8f69b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-194bb47b72106da4a60a9cf5560153b9d33033bc9a2956ae0f8b9eb4f28a981990499c93507560416198a71737434c1ab7ba798c5bb336b58f92563ee6f8f69b"' :
                                        'id="xs-injectables-links-module-UsersModule-194bb47b72106da4a60a9cf5560153b9d33033bc9a2956ae0f8b9eb4f28a981990499c93507560416198a71737434c1ab7ba798c5bb336b58f92563ee6f8f69b"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInWithCredentialDto.html" data-type="entity-link" >SignInWithCredentialDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});