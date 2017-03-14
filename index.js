import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

import TitleScreen from 'game-green-team-challenge/components/title_screen';
import LevelScreen from 'game-green-team-challenge/components/level_screen_component';
import LevelCompleteScreen from
    'game-green-team-challenge/components/level_complete_screen_component';

import DynamicDiverter1InfoScreen from
    'game-green-team-challenge/components/dynamic_diverter_one_info_screen';
import DynamicDiverter1Screen from
    'game-green-team-challenge/components/dynamic_diverter_level_one_screen';
import DynamicDiverter2InfoScreen from
    'game-green-team-challenge/components/dynamic_diverter_two_info_screen';
import DynamicDiverter2Screen from
    'game-green-team-challenge/components/dynamic_diverter_level_two_screen';
import DynamicDiverter3InfoScreen from
    'game-green-team-challenge/components/dynamic_diverter_three_info_screen';
import DynamicDiverter3Screen from
    'game-green-team-challenge/components/dynamic_diverter_level_three_screen';
import DynamicDiverter4InfoScreen from
    'game-green-team-challenge/components/dynamic_diverter_four_info_screen';
import DynamicDiverter4Screen from
    'game-green-team-challenge/components/dynamic_diverter_level_four_screen';
import DynamicDiverter5InfoScreen from
    'game-green-team-challenge/components/dynamic_diverter_five_info_screen';
import DynamicDiverter5Screen from
    'game-green-team-challenge/components/dynamic_diverter_level_five_screen';

import QuitScreen from 'game-green-team-challenge/components/quit_screen';

import ItemsToSort from 'game-green-team-challenge/components/items_to_sort';

let binNames = [
    'recycle',
    'landfill',
    'compost',
];

let itemsToSort = _.filter(ItemsToSort, item => _.includes(binNames, item.bin));

let audioRefs = _.uniq(_.map(itemsToSort, v =>
    _.kebabCase(_.replace(v.name, /\d+/g, '')))
);

let audioArray = _.map(audioRefs, (v, k) => {
    return {
        type: skoash.Audio,
        ref: v,
        key: k,
        props: {
            type: 'voiceOver',
            src: `${CMWN.MEDIA.GAME + 'sound-assets/_vositems/' + v}.mp3`,
            checkReady: false,
            onPlay: function () {
                this.updateScreenData({
                    keys: ['item', 'new'],
                    data: false,
                });
            }
        },
    };
});

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screenBufferAmount={2}
        screens={[
            iOSScreen,
            TitleScreen,
            LevelScreen(4.0),
            DynamicDiverter1InfoScreen,
            DynamicDiverter1Screen,
            LevelScreen(4.1),
            DynamicDiverter2InfoScreen,
            DynamicDiverter2Screen,
            LevelScreen(4.2),
            DynamicDiverter3InfoScreen,
            DynamicDiverter3Screen,
            LevelScreen(4.3),
            DynamicDiverter4InfoScreen,
            DynamicDiverter4Screen,
            LevelScreen(4.4),
            DynamicDiverter5InfoScreen,
            DynamicDiverter5Screen,
            LevelScreen(4.5),
            LevelCompleteScreen(4),
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_recycle`}
                spriteClass="recycle-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_landfill`}
                spriteClass="landfill-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_compost`}
                spriteClass="compost-item"
            />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_recycle.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_landfill.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_compost.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}purple.ribbon.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}luggage.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.star.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}frame.01.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}frame.02.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}transition.frame.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.mainnav.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}Img.anotherChance.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}img.resort.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}vertical.pipe.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}pipe.meter.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}container.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}titlescrnbg.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.01.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.02.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.03.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.04.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.transition.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.trash.recycle.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.trash.landfill.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.trash.compost.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}quit.background.jpg`} />,
            <skoash.Audio type="sfx" ref="button" src={`${CMWN.MEDIA.EFFECT}ButtonClick.mp3`} />,
            <skoash.Audio
                type="sfx"
                ref="screen-complete"
                src={`${MEDIA.EFFECT}NextAppear.mp3`}
                volume={3}
            />,
            <skoash.Audio ref="BKG0" type="background" src={`${CMWN.MEDIA.EFFECT}titlescreen.mp3`} loop />,
            <skoash.Audio ref="BKG4" type="background" src={`${CMWN.MEDIA.EFFECT}BKG4.mp3`} loop />,
            <div className="background title" />,
            <div className="background bkg1" />,
            <div className="background bkg2" />,
            <div className="background bkg3" />,
            <div className="background bkg4" />,
            <div className="background trash" />,
            <div className="background transition" />,
            <div className="background quit" />,
        ].concat(audioArray)}
    />
);

if (module.hot) module.hot.accept();
