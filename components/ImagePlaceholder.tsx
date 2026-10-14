export default function ImagePlaceholder({src,alt,className=''}:{src:string,alt:string,className?:string}){return <div className={`image ${className}`}><img src={src} alt={alt}/></div>}
