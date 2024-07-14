import BlurFade from '@/components/magicui/blur-fade';

const localImagesDataStore = [
    '/photo_gallery/GDSCDevFest (19 of 32).JPG',
    '/photo_gallery/GDSCDevFest (20 of 32).JPG',
    '/photo_gallery/gdsg_fireside_chat.JPG',
    '/photo_gallery/google_happy_hour_io.JPG',
    '/photo_gallery/google_montreal.JPG',
    '/photo_gallery/google_next.JPG',
    '/photo_gallery/men_in_tech.jpeg',
    '/photo_gallery/imprint_ve.JPG',
    '/photo_gallery/ms_adauris_offices.JPG',
    '/photo_gallery/startup_fest.jpg',
    '/photo_gallery/ment_in_tech_pannel.JPG',
    '/photo_gallery/canada_day_panel_2.png'
];

export function LandingGallery() {
    return (
        <section id="photos">
            <div className="columns-2 gap-4 sm:columns-3">
                {localImagesDataStore.map((imageUrl, idx) => (
                    <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                            <img className="mb-4 size-full rounded-lg object-contain" src={imageUrl} alt={`Random stock image ${idx + 1}`} />
                    </BlurFade>
                ))}
            </div>
        </section>
    );
}
