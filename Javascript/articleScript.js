

document.addEventListener('DOMContentLoaded', () => {


    const figure = document.getElementById('figure');


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
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/454930678_1013622457473171_5696647556461907158_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEspZqgq5l0L5N3UrnoWYu8I3g5WuikC5EjeDla6KQLkdOLl3ukzHQtYhTaa0cEGmSTPTjqwLmOEtRKmBqx5BW3&_nc_ohc=fyYCSGtDJkcQ7kNvgGzcvYW&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYDHuUGwl_DyIJM24POM74EMxAL36dy2YI2ti_kkCh0nAQ&oe=66C7A4E3',
            title: `𝗙𝗜𝗩𝗢𝗥𝗜𝗔𝗡𝗔 𝗧𝗦𝗬 𝗔𝗥𝗔-𝗣𝗢𝗧𝗢𝗔𝗡𝗔 𝗙𝗔𝗛𝗔𝗥𝗢𝗔 𝗛𝗢 𝗔𝗡'𝗡𝗬 𝗧𝗔𝗢𝗡𝗔 𝟮𝟬𝟮𝟰 𝗧𝗘𝗧𝗢 𝗔𝗡𝗜𝗩𝗢𝗡'𝗡𝗬 𝗔𝗡𝗧𝗘𝗡𝗜𝗠𝗜𝗘𝗥𝗔𝗡𝗗𝗢𝗛𝗢𝗟𝗢𝗡𝗔`,
            description: `Ho fanatanterahana ny voafaritra ao amin'ny didim-panjakana laharana faha 2024-1490 noraisin'ny Filohan'ny Repoblikan'i Madagasikara nandritra ny filankevitry ny Minisitra ny Alatsinainy 05 aogositra 2024 dia nivory tsy ara-potoana ny Parlemanta ny zoma 09 aogositra 2024 sy ny alatsinainy 12 aogositra 2024. Lahadinika amin'izany ny fanoloran'Andriamatoa 𝑵𝑻𝑺𝑨𝒀 𝑪𝒉𝒓𝒊𝒔𝒕𝒊𝒂𝒏, Praiminisitra Lehiben'ny Governemanta, ny fandaharan'asa hanatanterahana ny Politika ankapoben'ny Fanjakana. 
🗓️Ho an'ny teto anivon'ny Antenimierandoholona dia androany alatsinainy 12 aogositra 2024 no nanatanterahana ny fivoriana tsy ara-potoana.
👉Ny fotoam-pivoriana dia teo ambany fitarihan'ny jeneraly 𝑹𝑨𝑽𝑨𝑳𝑶𝑴𝑨𝑵𝑨𝑵𝑨 𝑹𝒊𝒄𝒉𝒂𝒓𝒅, Filohan'ny Antenimierandoholona, notronon'ireo Mpikambana ao amin'ny Birao Maharitra sy ireo Loholon'i Madagasikara, ary natrehan'ireo olo-manakaja isan-tsokajiny.
📎Nandritra ny lanonam-panokafana dia nisy ny fanolorana tamin'ny fomba ofisialy ny samboady an-dRamatoa 𝑹𝑨𝑴𝑨𝑹𝑶𝑺𝑶𝑨 𝑬𝒎𝒊𝒍𝒊𝒏𝒆, Loholon'i Madagasikara vaovao izay handimby an'Andriamatoa 𝑴𝑨𝑵𝑨𝑺𝑶𝑨 𝑫𝒐𝒏𝒂𝒕 𝑻𝒂𝒏𝒈, lany ho Solombavambahoakan'i Madagasikara.
📜Taorian'izay dia niroso avy hatrany tamin'ny famelabelarana ny fandaharan'asa hanatanterahana ny 𝑷𝒐𝒍𝒊𝒕𝒊𝒌𝒂 𝒂𝒏𝒌𝒂𝒑𝒐𝒃𝒆𝒏'𝒏𝒚 𝑭𝒂𝒏𝒋𝒂𝒌𝒂𝒏𝒂 Andriamatoa Praiminisitra Lehiben'ny Governemanta.
📝Hiompana hatrany amin'ireto andry telo lehibe ireto ny Politika ankapoben'ny Fanjakana : 
👉ny loharanon-karena mifototra amin'ny olona; 
👉ny fampiroboroboana ny indostria sy ny fanodinana ara-toekarena;
👉ny fahaiza-mitantana.
📝Raha fehezina dia ireto no tanjona lehibe ifantohan'ny fotoam-piasan'ny Filohan'ny Repoblika : 
👉fampiakarana ny hari-karena faobe;
👉famoronana asa; 
👉fanatsarana ny fahefa-mividin'ny vahoaka malagasy;
👉fanatsarana ny fitantanana. 
📌Amin'ny maha 𝒎𝒑𝒊𝒂𝒉𝒚 𝒏𝒚 𝑽𝒐𝒏𝒅𝒓𝒐𝒎-𝒃𝒂𝒉𝒐𝒂𝒌𝒂𝒎-𝒑𝒂𝒓𝒊𝒕𝒓𝒂 𝑰𝒕𝒔𝒊𝒏𝒋𝒂𝒓𝒂𝒎-𝒑𝒂𝒉𝒆𝒇𝒂𝒏𝒂 sy amin'ny maha 𝒎𝒑𝒂𝒏𝒐𝒍𝒐-𝒕𝒔𝒂𝒊𝒏𝒂 𝒏𝒚 𝑮𝒐𝒗𝒆𝒓𝒏𝒆𝒎𝒂𝒏𝒕𝒂 𝒏𝒚 𝑨𝒏𝒕𝒆𝒏𝒊𝒎𝒊𝒆𝒓𝒂𝒏𝒅𝒐𝒉𝒐𝒍𝒐𝒏𝒂 dia nandroso soso-kevitra maromaro ireo Loholon'i Madagasikara, anisan'izany ny:
👉fanarahana maso ireo sambo miditra any Mahajanga avy any Comores noho ny mbola tsy mahafoana tanteraka ny valan'aretina "Choléra" any an-toerana;
👉fidirana amin'ny fampiasana angovo azo havaozina hialana amin'ny fahatapahan-jiro matetika;
👉fijerena ireo toerana stratejika amin'ny fizahantany mba hanatsarana misimisy kokoa ireo faritra voakasik'izany; 
👉fijerena ireo tetikasa mahakasika ny tantsaha;
👉fampiroboroboana ny indostria any amin'ireo distrika rehetra araka ny tetikasa ODOF; 
👉fanarahana maso ny fampianarana eny anivon'ny oniversitem-panjakana izay lasa ankilabao; 
👉fandraisana ho mpiasam-panjakana ireo mpampianatra nivoaka avy amin'ny ENS manoloana ny tsy fahampian'ireo mpampianatra eny amin'ny sekolim-panjakana (lisea);
👉fanamafisana ny ady amin'ny zava-mahadomelina izay mamotika ny tanora Malagasy; 
👉fanaraha-maso ny fitrandrahana harena ankibon'ny tany (ristourne);
👉fanavahana ny andraikitra politika sy  ny andraikitra teknika eny anivon'ireny Ministera, Andrimpanjakana ary sampandraharaham-panjakana ireny.
👉fampiasana amin'ny tokony ho izy ireo fitaovana sy ny olombelona (mpiasa) eny anivon'ireo Minisitera. 
🔚Nofaranana tamin'ny fomba ofisialy androany ihany ny fivoriana tsy ara-potoana faharoa ho an'ny taona 2024 ny teto anivon'ny Antenimierandoholona.`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/452931095_472365925752817_2532032350926771276_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEISgmWWJfhIFjXZuqGq7nd1s8BwIj_awHWzwHAiP9rATMExdPJn6aEC3W13VwmXhL8jO0Y2tjd_2O1enTfA4-C&_nc_ohc=hsZsOjnDLIIQ7kNvgGuK5_e&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYDEEvxQ1V0qJ-NRqGS5gw0wXU3WbGegDF7_zNrd6qlbuQ&oe=66C79268',
            title: `𝗡𝗢𝗧𝗢𝗟𝗢𝗥𝗔𝗡𝗔 𝗧𝗔𝗥𝗔𝗧𝗔𝗦𝗬 𝗙𝗔𝗡𝗔𝗠𝗔𝗥𝗜𝗡𝗔𝗡𝗔 𝗡𝗬 𝗙𝗔𝗛𝗔𝗩𝗜𝗧𝗔𝗡'𝗡𝗬 𝗙𝗜𝗭𝗔𝗥𝗔𝗡'𝗔𝗦𝗔 𝗜𝗥𝗘𝗢 𝗠𝗣𝗜𝗔𝗡𝗔𝗧𝗥𝗔 𝗛𝗢 𝗠𝗣𝗜𝗧𝗦𝗔𝗥𝗔, 𝗦𝗔𝗠𝗣𝗔𝗠-𝗣𝗜𝗢𝗙𝗔𝗡𝗔𝗡'𝗡𝗬 𝗠𝗣𝗜𝗧𝗦𝗔𝗥𝗔 𝗠𝗜𝗦𝗔𝗛𝗔𝗡𝗔 𝗡𝗬 𝗔𝗗𝗬 𝗔𝗧𝗔𝗢 𝗔𝗠𝗜𝗡'𝗡𝗬 𝗙𝗔𝗡𝗝𝗔𝗞À𝗡𝗔 𝗥𝗘𝗛𝗘𝗙𝗔 𝗡𝗔𝗛𝗔𝗩𝗜𝗧𝗔 𝗙𝗜𝗢𝗙𝗔𝗡𝗔𝗡𝗔 𝗧𝗘𝗧𝗢 𝗔𝗡𝗜𝗩𝗢𝗡'𝗡𝗬 𝗔𝗡𝗧𝗘𝗡𝗜𝗠𝗜𝗘𝗥𝗔𝗡𝗗𝗢𝗛𝗢𝗟𝗢𝗡𝗔`,
            description: `Nifarana androany alakamisy 25 jolay 2024 ny fiofanana natrehan'ireo mpianatra ho Mpitsara ao amin'ny Sekoly ambony mampiofana ho Mpitsara sy Mpiraki-draharaha eny anivon’ny Fitsarana na "É𝒄𝒐𝒍𝒆 𝑵𝒂𝒕𝒊𝒐𝒏𝒂𝒍𝒆 𝒅𝒆 𝒍𝒂 𝑴𝒂𝒈𝒊𝒔𝒕𝒓𝒂𝒕𝒖𝒓𝒆 𝒆𝒕 𝒅𝒆𝒔 𝑮𝒓𝒆𝒇𝒇𝒆𝒔" (𝑬𝑵𝑴𝑮) ao amin'ny sampam-piofanan'ny Mpitsara misahana ny ady atao amin'ny Fanjakana.
📜Arak'izany dia notolorana taratasy fanamarinana ny fahavitan'ny fizaran'asa na "Attestation de Stage" izy ireo, ka ny jeneraly 𝑹𝑨𝑽𝑨𝑳𝑶𝑴𝑨𝑵𝑨𝑵𝑨 𝑹𝒊𝒄𝒉𝒂𝒓𝒅, Filohan'ny Antenimierandoholona sy ireo Loholon'i Madagasikara izay tonga nanotrona azy no nanolotra izany. Anisan'ny nanatrika ny fotoana ihany koa ireo Tompon'andraikitra ambony eto anivon'ny Antenimierandoholona.
👉Raha tsiahivina dia mpianatra miisa 20 avy ao amin'ny ENMG no niatrika fiofanana teto amin'ny Lapan'Anosikely nanomboka ny alatsinainy 22 jolay 2024 lasa teo. Fiofanana izay nifantoka indrindra tamin'ny fampahafantarana ny andraikitra sy ny anjara asan'ny Antenimierandoholona, ny fifandraisan'ity Andrimpanjakana ity amin’ireo Andrimpanjakana hafa eto Madagasikara ary ny fifanolanana amin'ny Fanjakana (Contentieux administratif).
🙏Amin'ny ankapobeny dia  𝒇𝒆𝒏𝒐 𝒅𝒊𝒂 𝒇𝒆𝒏𝒐 𝒏𝒚 𝒇𝒂𝒉𝒂𝒍𝒂𝒍à𝒏𝒂 𝒏𝒂𝒎𝒑𝒊𝒕𝒂𝒊𝒏𝒂 𝒕𝒂𝒎𝒊𝒏'𝒊𝒓𝒆𝒕𝒐 𝒎𝒑𝒊𝒂𝒏𝒂𝒕𝒓𝒂 𝒊𝒓𝒆𝒕𝒐 araka ny nambaran'ny solontenan'izy ireo nandritra ny fandraisam-pitenenany. Henikaja sy henim-boninahitra, hoy izy, ny lanonana tamin'ny nanatrehan'ireo Loholon'i Madagasikara izay tarihan'Andriamatoa Filohan'ny Antenimierandoholona ity fotoana andro androany ity.
🎤Andriamatoa Filohan'ny Antenimierandoholona kosa tetsy ankilany dia namporisika ireto mpianatra ho Mpitsara ireto mba hanatanteraka ny andraikitra izay hiandry azy ireo am-pahamarinana sy mba hijery hatrany ny tombotsoan'ny rehetra. Tokony hampihatra tsara ny fianarana norantovina ireto mpianatra ho Mpitsara ireto hoy izy ka hahay handray ny andraikitra mifanandrify amin'izany rehefa eny an-tsehatra. Nirary soa hahavitan'ny fianaran'izy ireo moa Andriamatoa Filohan'ny Antenimierandoholona teo am-pamaranana ary namporisika azy ireo hahatoky tena amin'ny traikefa ananan'izy ireo satria izy ireo no ho dimbin'ireo zokiny.
Antenimierandoholona Madagasikara`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/450646213_467613709334643_6833602055667683704_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFUv-PhmJYuealD4LffF7f9sEz3_-wRNu-wTPf_7BE273IDJxn5J6s1XfWl_2unhfS80PggEwoygIA68hnpq9Si&_nc_ohc=MtqAIl5T9O0Q7kNvgEZeSa2&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYAkLlzcijtzWYznW3FnUmSYe4jHDmwM-nE8A7N6IjTxaQ&oe=66C79A6D',
            title: `ANTENIMIERAM-PIRENENA.`,
            description: `Am-panetren-tena no andraisana an'izao andraikitra goavana eto amin'ny Firenena izao amin'ny maha filohan'ny Antenimieram-pirenena ny tenako. 
Etoana dia isaorana ireo Solombavambahoakan'i Madagasikara rehetra izay nifidy ahy ho amin'izany toerana izany ary manome toky anareo sy ny vahoaka Malagasy fa hanatontosa amin'ny antsakany sy andavany an'izany andraikitra izany.
Andrim-panjakana manana ny maha-izy azy ny Antenimieram-pirenena ka tokony hahasaro-piaro antsika sy ho tandrovantsika toy ny anakandriamaso. 
-----------------------------------
ASSEMBLÉE NATIONALE. 
Élu Président de l'Assemblée Nationale, j'accepte en toute humilité l'immense responsabilité qui m'échoit en cette qualité. 
J'adresse ici mes remerciements à tous les Députés de Madagascar pour la confiance qu'ils m'ont témoignée. Je m'engage envers vous et le peuple Malagasy à honorer mes responsabilités comme il se doit.
L' Assemblée Nationale est une grande institution étatique qui devrait être placée à sa juste valeur et être notre plus grande fierté.`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/455084309_808771908094884_8293725500441354812_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFz6qjfl2bkqZxRvXIv6RzSUkpu9dJBeRFSSm710kF5EX4a5GQMybIVlHbLQZeBcPN19ii9saywK0Ix3KpoNYlG&_nc_ohc=CfOCZ-IUm70Q7kNvgHXeYlK&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYBuZkTaXdn3X0391k4GwOy5MM2AmD8zMEh71Q-FOoY23w&oe=66C78CE5',
            title: `champion de Madagascar 2024`,
            description: `Le Président de l'Assemblée nationale, Monsieur Tokely Justin, a accueilli ce 14 août au Palais de Tsimbazaza le « Disciples Football Club » (DFC) du Vakinankaratra. La délégation était composée du Député élu à Betafo, Monsieur Fiarovana Lovanirina, du Député élu à Antsirabe I, Monsieur Razafinimaro Désiré, ainsi que du Président du DFC.
Le DFC, couronné champion de Madagascar 2024, s'apprête à se rendre à Maurice pour défendre les couleurs nationales lors d'un match prévu le 18 août, dans le cadre de la compétition pour le titre de champion d'Afrique.`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/455072958_807880578184017_2279062132539767431_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGI8JNewig3JJ8PpGNKNkzuFUb_5LG6ZRkVRv_ksbplGZLqvUss_z2Ka2apuLNff91FK5FLKH4Jw522A5l3cyKo&_nc_ohc=snW6ZDCdRcUQ7kNvgF9ewwx&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYAsj94CKon03jlIBNFcd9DOjhNDk4eD6heILKg4gzWYQQ&oe=66C7A3B1',
            title: `fanambaram-pananana ireo solombavambahoaka `,
            description: `Nanatanteraka ny fanambaram-pananana ireo solombavambahoaka androany talata faha-13 aogositra 2024. Izany dia ho fanajana ny voalazan’ny Lalampanorenana amin’ny andininy faha-41 izay milaza fa eny amin’ny Fitsarana Avo momba ny Lalampanorenana no anaovan’ny Filohan’ny Repoblika, ny Governemanta, ny Solombavambahoaka, ny Loholona ary ireo mpikambana ao amin’ny HCC ny fanambaram-pananany mialohan’ny hisahanany ny andraikiny.`
        },
        {
            image: 'https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/453908489_484211667667681_2830344146875643892_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHZbkzVNkQOHp04TT5jh28d5_N1PBjudMnn83U8GO50yU9OKbib_YMPuhbe9WZYM3kP_uQ4J44xo8A8kM9Cu3Vj&_nc_ohc=gEj1qUc2SQsQ7kNvgGLhW4c&_nc_ht=scontent.ftnr2-2.fna&oh=00_AYDVT9qdpi1LZS41DVh3vzyAn1BpHywZ3W5qhlB055JZ8A&oe=66C7885F',
            title: `Fitsidihana nataon'ny ekipa ny #COSEF ny Kestiora ny  Antenimierandoholona Madagasikara`,
            description: `Nitsidika / namangy sady nifampiresaka tamin'Atoa Senatera Eddie Fernand  tao amin'ny birao fiasany teny amin'ny Lapa ny Anosikely ireto ekipa ny #COSEF roa  mirahalahy ireto ( Rakotonirina Urluc Audry sy Delanixe Mangeland Soavazaha ) anio 05  Aogositra 2024 .
🔵Fanamafisana fiaraha-miasa hatrany moa ny resadresaka nifanaovana ny roa tonta.Izany hoe ny asa fampandrosoana efa natomboka niarahana tamin'ny ekipa ny #COSEF dia tsy maintsy ho tohizana ary fanatsarana izany no atao hoy ny Loholon'i Madagasikara  Atoa Eddie FERNAND Serge .
👉Teo ihany koa ny fankasitrahana ireo ekipa tamin'ny fifanomezan-tanana nahavoafidy ny depiote Éric FERNAND tao amin'ny distrika ny Antalaha.
   Misy tetiandro arahina ny fanatanterahana ny tetikasan'ny #COSEF hoy hatrany Atoa Kestiora,ka tsy tokony hikoropaka ny kaominina na ny fokontany tsirairay anatiny distrikany Antalaha.
#SenateraEddieFERNAND
#COSEF`
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


})

