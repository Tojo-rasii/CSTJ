

document.addEventListener('DOMContentLoaded', () => {


    const active = document.querySelector('.active');
    const aLink = document.querySelectorAll('header section article:nth-child(2) a');

    const scrollDown = document.getElementById('scrollDown');
    const darkMode = document.getElementById('dark-mode');

    const figure = document.getElementById('figure');



    const listIcon = document.getElementById('listIcon');

    const darkMode2 = document.querySelector('.headerMobile #dark-mode');
    const listIcon2 = document.querySelector('.headerMobile #listIcon');

    const body = document.body;
    const darkInput = document.querySelectorAll('header:nth-child(2) input[type="checkbox"]');

    const listInput = document.querySelectorAll('.headerMobile input[type="checkbox"]');
    const pop = document.querySelector('.pop');


    const articles = [
        {
            image: `https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/450723222_469401715815343_7479344219528169423_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEaBHX2ibXXhgmh3M_2pQtWBcbuAekWgyYFxu4B6RaDJhZoKtJz0jBsZEHw1X5tojdMalAt7h9-4sO7cb91Ku9J&_nc_ohc=h2_LUo6o7fgQ7kNvgEFTa4v&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYBdrJyl6h1Aey7ZeuAmH8OSNRVgMvsw0N-_se_cYkjHTQ&oe=66C43001`,
            title: `FIARAHABANA NY FILOHAN'NY ANTENIMIERAMPIRENENA`,
            description: `Ny fianakaviamben'ny #COSEF dia miarahaba an'Andriamatoa TOKELY Justin no voafidy \n
                                Filohanny Antenimierampirenena vaovao izay Solombavambahoaka voafidy tao SAMBAVA.\n
                                Tsy adino ihany koa ny miarahaba ianareo mandrafitra ny birao maharitra ny
                                Antenimierampirenena .
                                Mirary Soa .
                                Mahaleova mahalasana 🙏.
                                EEddie FernandFEddie FernandCCandidat Eric FernandECandidat Eric FernandFCandidat Eric
                                FernandAAides CuantalahaCAides Cuantalaha
                                CCosef OfisialyOCosef Ofisialy`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/454584201_480935038229239_454747725655251971_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeESehBHhtRE71RETHGp1BnmJg0YVNd-cDMmDRhU135wM4BZGYNCHdVy3YOcBtm1IGN7_ksQMLXh64iqVdyXC4eK&_nc_ohc=H2_xknNKgXgQ7kNvgEb0oUP&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYAKvHmOxa2xs_mqOS0axf45dzyzNa3TB33Qcpj1u_f3Fg&oe=66C4058D',
            title: 'FIARAHA-MIASA COSEF / PAN',
            description: `Antananarivo faha 7 Aogositra 2024
                                [Fitsidihana ara-panajana ny Filohan’ny Antenimierampirenena, Andriamatoa TOKELY Justin]
                                ♦️Fihaonana sy fifanakalozana niompana tanteraka tamin'ny tombontsoan'ny Firenena ary
                                fanamafisana ny fiaraha-miasa amin'ny roa tonta.
                                📌Voninahitra ho an'Andriamatoa Kestiora ny Antenimierandoholona Madagasikara Eddie
                                FERNAND Serge sy ny ekipany Atoa JAONARY Nérapide mpanolotsainany,ny nandraisan’Atoa
                                Filohan'ny Antenimierampirenena azy ireo. Fihaonana nahafahan'ny roa tonta nifanakalo
                                hevitra sy nifandinika momba ny fampandrosoana ny firenena.
                                📌Fankasitrahana manokana an'Andriamatoa Filohan'ny Repobilikan'ny Madagasikara, Andry
                                RAJOELINA, nohon'ny fametrahana fatokisana amin'Atoa TOKELY Justin hatrizay ary
                                amin'izao fotoana izao izy tafapetraka amin'ny toerana stratejika voalohany izao; izany
                                hoe Filohan'ny Antenimierampirenena.
                                ✳️Fahavononana sy fahafoizan-tena ny roa tonta ho an'ny fampandrosan ny Firenena.
                                #Senatera_Eddie_FERNAND
                                #Antenimierandoholona
                                #TOKELY_Justin
                                #Antenimierampirenena
                                Comm Loholona Eddie Fernand`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/452680706_477107705044744_8122406010973231508_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEKnCMYnAF9gl6R1PgmkvqoioECLeNAW5KKgQIt40BbkjyYXxxERjm4mq1FgKyzW1GhICmdSQqWI63iO98E2oDt&_nc_ohc=9FCh1RL8-bMQ7kNvgFH6F0L&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYBRrDUOm-hSGNXd-cixbK-wO1U5C2fhd9CI4E67r5xGkQ&oe=66C4205C',
            title: 'FAMETRAHANA SAMBOADY NY SOLOPBAVAMBAHOAKA VOAFIDY TETO ANTANANARIVO',
            description: `Antananarivo faha 24 Jolay 2024
                                -----------------------------------------------------
                                [ Lanonam-pametrahana ny samboady ny ireo Solombavambahoaka sasantsasany voafidy teto
                                Antananarivo ]
                                Ny fametrahana samboady dia manamarika ny fanombohana ny asa na fandraisana andraikitra
                                amin'ny firenena iray.
                                📌Tontosa androany 24 jolay 2024 ny fametrahana tamin'ny fomba ofisialy ny samboady ny
                                Filoha lefitry ny Antenimierampirenena misahana ny faritanin'Antananarivo, Atoa Augustin
                                ANDRIAMANANORO sy ireo Solombavambahoaka Sasantsasany voafidy teto amin'ny
                                Faritanin'Antananarivo.
                                📌Lanonana teo ambany fitarihan'Atoa Filohan'ny Antenimierampirenena Tokely Justin,izay
                                natrehan'ireo olo-manakaja maro izay nahitana ny falohan'ny Antenimierandoholona Atoa
                                Jeneraly RAVALOMANANA Richard sy ireo Loholon'i Madagasikara mpiara-miasa aminy ka
                                anisan'izany ny Kestiora Eddie FERNAND Serge.
                                👉Misaotra an'Atoa VPAN Augustin ANDRIAMANANORO tamin'ny fiaraha-miasa hatrizay mandraka
                                ankehitriny ny Kestiora ny Antenimierandoholona sy ny ekipany , ary mirary soa havita be
                                amin'ny adidy sy andraikitra amin'ny fampandrosoana ny firenena.
                                #Sénateur_Eddie_FERNAND_Serge
                                #Questeur_Sénat
                                #Cosef (COllaborateurs et Sympathisants de l'Équipe FERNAND)`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/452680706_477107705044744_8122406010973231508_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEKnCMYnAF9gl6R1PgmkvqoioECLeNAW5KKgQIt40BbkjyYXxxERjm4mq1FgKyzW1GhICmdSQqWI63iO98E2oDt&_nc_ohc=9FCh1RL8-bMQ7kNvgFH6F0L&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYBRrDUOm-hSGNXd-cixbK-wO1U5C2fhd9CI4E67r5xGkQ&oe=66C4205C',
            title: 'FAMETRAHANA SAMBOADY NY SOLOPBAVAMBAHOAKA VOAFIDY TETO ANTANANARIVO',
            description: `Antananarivo faha 24 Jolay 2024
                                -----------------------------------------------------
                                [ Lanonam-pametrahana ny samboady ny ireo Solombavambahoaka sasantsasany voafidy teto
                                Antananarivo ]
                                Ny fametrahana samboady dia manamarika ny fanombohana ny asa na fandraisana andraikitra
                                amin'ny firenena iray.
                                📌Tontosa androany 24 jolay 2024 ny fametrahana tamin'ny fomba ofisialy ny samboady ny
                                Filoha lefitry ny Antenimierampirenena misahana ny faritanin'Antananarivo, Atoa Augustin
                                ANDRIAMANANORO sy ireo Solombavambahoaka Sasantsasany voafidy teto amin'ny
                                Faritanin'Antananarivo.
                                📌Lanonana teo ambany fitarihan'Atoa Filohan'ny Antenimierampirenena Tokely Justin,izay
                                natrehan'ireo olo-manakaja maro izay nahitana ny falohan'ny Antenimierandoholona Atoa
                                Jeneraly RAVALOMANANA Richard sy ireo Loholon'i Madagasikara mpiara-miasa aminy ka
                                anisan'izany ny Kestiora Eddie FERNAND Serge.
                                👉Misaotra an'Atoa VPAN Augustin ANDRIAMANANORO tamin'ny fiaraha-miasa hatrizay mandraka
                                ankehitriny ny Kestiora ny Antenimierandoholona sy ny ekipany , ary mirary soa havita be
                                amin'ny adidy sy andraikitra amin'ny fampandrosoana ny firenena.
                                #Sénateur_Eddie_FERNAND_Serge
                                #Questeur_Sénat
                                #Cosef (COllaborateurs et Sympathisants de l'Équipe FERNAND)`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/452680706_477107705044744_8122406010973231508_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEKnCMYnAF9gl6R1PgmkvqoioECLeNAW5KKgQIt40BbkjyYXxxERjm4mq1FgKyzW1GhICmdSQqWI63iO98E2oDt&_nc_ohc=9FCh1RL8-bMQ7kNvgFH6F0L&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYBRrDUOm-hSGNXd-cixbK-wO1U5C2fhd9CI4E67r5xGkQ&oe=66C4205C',
            title: 'FAMETRAHANA SAMBOADY NY SOLOPBAVAMBAHOAKA VOAFIDY TETO ANTANANARIVO',
            description: `Antananarivo faha 24 Jolay 2024
                                -----------------------------------------------------
                                [ Lanonam-pametrahana ny samboady ny ireo Solombavambahoaka sasantsasany voafidy teto
                                Antananarivo ]
                                Ny fametrahana samboady dia manamarika ny fanombohana ny asa na fandraisana andraikitra
                                amin'ny firenena iray.
                                📌Tontosa androany 24 jolay 2024 ny fametrahana tamin'ny fomba ofisialy ny samboady ny
                                Filoha lefitry ny Antenimierampirenena misahana ny faritanin'Antananarivo, Atoa Augustin
                                ANDRIAMANANORO sy ireo Solombavambahoaka Sasantsasany voafidy teto amin'ny
                                Faritanin'Antananarivo.
                                📌Lanonana teo ambany fitarihan'Atoa Filohan'ny Antenimierampirenena Tokely Justin,izay
                                natrehan'ireo olo-manakaja maro izay nahitana ny falohan'ny Antenimierandoholona Atoa
                                Jeneraly RAVALOMANANA Richard sy ireo Loholon'i Madagasikara mpiara-miasa aminy ka
                                anisan'izany ny Kestiora Eddie FERNAND Serge.
                                👉Misaotra an'Atoa VPAN Augustin ANDRIAMANANORO tamin'ny fiaraha-miasa hatrizay mandraka
                                ankehitriny ny Kestiora ny Antenimierandoholona sy ny ekipany , ary mirary soa havita be
                                amin'ny adidy sy andraikitra amin'ny fampandrosoana ny firenena.
                                #Sénateur_Eddie_FERNAND_Serge
                                #Questeur_Sénat
                                #Cosef (COllaborateurs et Sympathisants de l'Équipe FERNAND)`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/452680706_477107705044744_8122406010973231508_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEKnCMYnAF9gl6R1PgmkvqoioECLeNAW5KKgQIt40BbkjyYXxxERjm4mq1FgKyzW1GhICmdSQqWI63iO98E2oDt&_nc_ohc=9FCh1RL8-bMQ7kNvgFH6F0L&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYBRrDUOm-hSGNXd-cixbK-wO1U5C2fhd9CI4E67r5xGkQ&oe=66C4205C',
            title: 'FAMETRAHANA SAMBOADY NY SOLOPBAVAMBAHOAKA VOAFIDY TETO ANTANANARIVO',
            description: `Antananarivo faha 24 Jolay 2024
                                -----------------------------------------------------
                                [ Lanonam-pametrahana ny samboady ny ireo Solombavambahoaka sasantsasany voafidy teto
                                Antananarivo ]
                                Ny fametrahana samboady dia manamarika ny fanombohana ny asa na fandraisana andraikitra
                                amin'ny firenena iray.
                                📌Tontosa androany 24 jolay 2024 ny fametrahana tamin'ny fomba ofisialy ny samboady ny
                                Filoha lefitry ny Antenimierampirenena misahana ny faritanin'Antananarivo, Atoa Augustin
                                ANDRIAMANANORO sy ireo Solombavambahoaka Sasantsasany voafidy teto amin'ny
                                Faritanin'Antananarivo.
                                📌Lanonana teo ambany fitarihan'Atoa Filohan'ny Antenimierampirenena Tokely Justin,izay
                                natrehan'ireo olo-manakaja maro izay nahitana ny falohan'ny Antenimierandoholona Atoa
                                Jeneraly RAVALOMANANA Richard sy ireo Loholon'i Madagasikara mpiara-miasa aminy ka
                                anisan'izany ny Kestiora Eddie FERNAND Serge.
                                👉Misaotra an'Atoa VPAN Augustin ANDRIAMANANORO tamin'ny fiaraha-miasa hatrizay mandraka
                                ankehitriny ny Kestiora ny Antenimierandoholona sy ny ekipany , ary mirary soa havita be
                                amin'ny adidy sy andraikitra amin'ny fampandrosoana ny firenena.
                                #Sénateur_Eddie_FERNAND_Serge
                                #Questeur_Sénat
                                #Cosef (COllaborateurs et Sympathisants de l'Équipe FERNAND)`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/452680706_477107705044744_8122406010973231508_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEKnCMYnAF9gl6R1PgmkvqoioECLeNAW5KKgQIt40BbkjyYXxxERjm4mq1FgKyzW1GhICmdSQqWI63iO98E2oDt&_nc_ohc=9FCh1RL8-bMQ7kNvgFH6F0L&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYBRrDUOm-hSGNXd-cixbK-wO1U5C2fhd9CI4E67r5xGkQ&oe=66C4205C',
            title: 'FAMETRAHANA SAMBOADY NY SOLOPBAVAMBAHOAKA VOAFIDY TETO ANTANANARIVO',
            description: `Antananarivo faha 24 Jolay 2024
                                -----------------------------------------------------
                                [ Lanonam-pametrahana ny samboady ny ireo Solombavambahoaka sasantsasany voafidy teto
                                Antananarivo ]
                                Ny fametrahana samboady dia manamarika ny fanombohana ny asa na fandraisana andraikitra
                                amin'ny firenena iray.
                                📌Tontosa androany 24 jolay 2024 ny fametrahana tamin'ny fomba ofisialy ny samboady ny
                                Filoha lefitry ny Antenimierampirenena misahana ny faritanin'Antananarivo, Atoa Augustin
                                ANDRIAMANANORO sy ireo Solombavambahoaka Sasantsasany voafidy teto amin'ny
                                Faritanin'Antananarivo.
                                📌Lanonana teo ambany fitarihan'Atoa Filohan'ny Antenimierampirenena Tokely Justin,izay
                                natrehan'ireo olo-manakaja maro izay nahitana ny falohan'ny Antenimierandoholona Atoa
                                Jeneraly RAVALOMANANA Richard sy ireo Loholon'i Madagasikara mpiara-miasa aminy ka
                                anisan'izany ny Kestiora Eddie FERNAND Serge.
                                👉Misaotra an'Atoa VPAN Augustin ANDRIAMANANORO tamin'ny fiaraha-miasa hatrizay mandraka
                                ankehitriny ny Kestiora ny Antenimierandoholona sy ny ekipany , ary mirary soa havita be
                                amin'ny adidy sy andraikitra amin'ny fampandrosoana ny firenena.
                                #Sénateur_Eddie_FERNAND_Serge
                                #Questeur_Sénat
                                #Cosef (COllaborateurs et Sympathisants de l'Équipe FERNAND)`
        }
    ];

    let content = '';

    articles.map((article, index) => {
        content += `
    <figure key=${index}>
                        <picture>
                            <img src=${article.image}
                                alt="">
                        </picture>
                        <figcaption>
                            <p>${article.title}</p>
                            <p>${article.description}</p>
                        </figcaption>
                    </figure>
    `
    })

    figure.innerHTML = content;







    function displayArticles(filteredArticles) {
        let content = '';
        filteredArticles.slice(0, 2).map((article, index) => {
            content += `
        <figure key="${index}">
            <picture>
                <img src="${article.image}" alt="">
            </picture>
            <figcaption>
                <p>${article.title}</p>
                <p>${article.description}</p>
            </figcaption>
        </figure>
        `;
        });
        document.getElementById('articlesContainer').innerHTML = content;
    }

    // Afficher les deux premiers articles par défaut
    displayArticles(articles);

    document.querySelector('#searchInput').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredArticles = articles.filter(article =>
            article.title.toLowerCase().includes(searchTerm) ||
            article.description.toLowerCase().includes(searchTerm)
        );
        displayArticles(filteredArticles);

    });


    darkInput.forEach(darkInputs => {
        darkInputs.addEventListener('input', (e) => {
            const target = e.target.checked
            if (target === true) {
                darkMode.classList.add('bi-sun');
                darkMode2.classList.add('bi-sun');


                body.classList.add('dark-mode');
            } else {
                darkMode.classList.remove('bi-sun');
                darkMode2.classList.remove('bi-sun');

                body.classList.remove('dark-mode');

            }
        })
    })




    listInput.forEach(listInputs => {
        listInputs.addEventListener('input', (e) => {
            const target = e.target.checked
            if (target === true) {
                pop.classList.add('block');
                listIcon.classList.add('bi-x');
                listIcon2.classList.add('bi-x');
            } else {
                pop.classList.remove('block');
                listIcon.classList.remove('bi-x');
                listIcon2.classList.remove('bi-x');

            }
        })
    })




    // darkMode.addEventListener('toggle', darkmode);
    // lightMode.removeEventListener('toggle', darkmode);

    // function darkmode() {
    //     darkMode.classList.add('bi-sun');
    // }

    document.addEventListener('scroll', () => {
        const value = window.scrollY;

        const btnScrollToTop = document.querySelector('.btnScrollToTop');

        if (value > 682) {
            btnScrollToTop.classList.add('block');

        } else {
            btnScrollToTop.classList.remove('block');

        }

        btnScrollToTop.addEventListener('click', () => {
            window.scroll(0, 0);

        })
    })




    aLink.forEach((link, index) => {
        link.addEventListener('click', slideNav);

        function slideNav() {
            switch (index) {
                case 0:
                    active.classList.add('left-0');
                    active.classList.remove('left-1');
                    active.classList.remove('left-2');
                    active.classList.remove('left-3');
                    active.classList.remove('left-4');

                    break;

                case 1:
                    active.classList.remove('left-0');
                    active.classList.add('left-1');
                    active.classList.remove('left-2');
                    active.classList.remove('left-4');
                    active.classList.remove('left-3');

                    break;

                case 2:
                    active.classList.remove('left-0');
                    active.classList.remove('left-1');
                    active.classList.add('left-2');
                    active.classList.remove('left-3');
                    active.classList.remove('left-4');

                    break;

                case 3:
                    active.classList.remove('left-0');
                    active.classList.remove('left-1');
                    active.classList.remove('left-2');
                    active.classList.add('left-3');
                    active.classList.remove('left-4');


                    break;

                case 4:
                    active.classList.remove('left-0');
                    active.classList.remove('left-1');
                    active.classList.remove('left-2');
                    active.classList.remove('left-3');
                    active.classList.add('left-4');

                    break;
            }
        }

    })



    window.addEventListener('load', load)

    function load() {
        window.scroll(0, 0);
    }

    document.getElementById('home').addEventListener('click', () => {
        load();
    })

    scrollDown.addEventListener('click', scrollD);

    function scrollD() {

        window.location.href = '#Actu';

    };

    const search = document.querySelector('.bi-search');
    const searchicon = document.querySelector('#search');


    search.addEventListener('click', () => {
        window.location.href = 'Components/recherche.html';

    });
    searchicon.addEventListener('click', () => {
        window.location.href = '../Components/recherche.html';

    });


})

