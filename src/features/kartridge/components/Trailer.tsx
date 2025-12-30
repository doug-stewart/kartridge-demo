import ReactPlayer from 'react-player';

const Trailer = ({ url }: { url: string }) => {
    return (
        <div className="c-trailer__preview">
            <ReactPlayer
                className="c-trailer__preview-media"
                height="100%"
                src={url}
                width="100%"
            />
        </div>
    );
};

export default Trailer;
