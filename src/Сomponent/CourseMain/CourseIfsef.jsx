import { useState } from "react";

const CourseIfsef = () => {
    const freeLessons = [
        { title: "Installing Vue JS", duration: "5m", videoUrl: "https://www.youtube.com/embed/deEeRfa3Vjk" },
        { title: "Understand Vue Components", duration: "10m", videoUrl: "https://www.youtube.com/embed/kz23xxukY5s" },
        { title: "Vue Templating", duration: "8m", videoUrl: "https://www.youtube.com/embed/GeulXZP_kZ8" },
    ];
    const [selectedVideo, setSelectedVideo] = useState(freeLessons[0].videoUrl); 

    return (
        <div className="max-w-6xl mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    <div>
                        <iframe className="w-full h-[380px] rounded-2xl"
                            src={selectedVideo} title="Course Video" allowFullScreen>
                        </iframe>
                      
                    </div>
                </div>

                <div className="border border-black rounded-xl px-4 py-2">
                    <h2 className="text-xl font-semibold mb-2">Уроки 3D дизайнера</h2>
                    <div className="flex">
                        <p className="mr-4">15 уроков</p>
                        <li className="text-yellow-400 marker:text-black">10% пройдено</li>
                    </div>

                    <div className="max-h-[300px] overflow-y-auto">
                        <ul>
                            {freeLessons.map((lesson, index) => (
                                <li key={index}
                                    className="p-2 cursor-pointer rounded-lg text-sm sm:text-base"
                                    onClick={() => setSelectedVideo(lesson.videoUrl)}>
                                    {lesson.title} - {lesson.duration}
                                    <hr className="mt-2 border-gray-300" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseIfsef;