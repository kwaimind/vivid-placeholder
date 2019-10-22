import React from 'react';
import { ColorExtractor } from 'react-color-extractor';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageUrl: '',
			fileName: '',
			fileType: '',
			colors: [],
			swatchOverlay: false
		};
		this.swatchOverlay = this.swatchOverlay.bind(this);
		this.handleRestart = this.handleRestart.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	handleRestart() {
		this.setState({
			imageUrl: '',
			colors: []
		});
		document.body.style.backgroundColor = '#3d9970';
	}

	handleImageChange(e) {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			this.setState({
				imageUrl: URL.createObjectURL(file),
				fileType: file.type
			});
		};
		reader.readAsDataURL(file);
	}

	handleColors = colors => {
		this.setState(state => ({ colors: [...state.colors, ...colors] }));
		document.body.style.backgroundColor = this.state.colors[0];
	};

	renderSwatches = () => {
		const { colors } = this.state;
		return colors.slice(0, 6).map((color, id) => {
			return (
				<div
					key={id}
					className="swatch-item"
					style={{
						backgroundColor: color
					}}
				>
					{color}
				</div>
			);
		});
	};

	swatchOverlay() {
		this.setState(prevState => ({ swatchOverlay: !prevState.swatchOverlay }));
	}

	render() {
		return (
			<div className="app">
				{!this.state.imageUrl && (
					<div>
						<span role="img" aria-label="camera">
							📷
						</span>
						<h1>Vivid Placeholder</h1>
						<p>Upload an image to find it's dominant color and swatches.</p>
						<form onSubmit={e => this.handleSubmit(e)}>
							<input
								className="file-input"
								type="file"
								id="file"
								onChange={e => this.handleImageChange(e)}
							/>
							<label htmlFor="file">choose a file</label>
						</form>
					</div>
				)}

				{this.state.imageUrl ? (
					this.state.fileType.includes('image') ? (
						<div>
							<div className="img-preview">
								<img src={this.state.imageUrl} alt={this.state.fileName} />
								<ColorExtractor
									src={this.state.imageUrl}
									getColors={this.handleColors}
								/>
							</div>
							{this.state.swatchOverlay && (
								<SwatchPicker renderSwatches={this.renderSwatches} />
							)}
							<SwatchButton
								toggle={this.state.swatchOverlay}
								action={this.swatchOverlay}
							/>
							<RestartButton handleRestart={this.handleRestart} />
						</div>
					) : (
						<p>Whoops. You need to upload an image for this to work.</p>
					)
				) : null}
			</div>
		);
	}
}

export default App;

function SwatchButton(props) {
	return (
		<div className="button left" onClick={props.action}>
			{!props.toggle ? 'Show' : 'Hide'} Swatches
		</div>
	);
}

function RestartButton(props) {
	return (
		<div className="button right" onClick={props.handleRestart}>
			Try a new image
		</div>
	);
}

function SwatchPicker(props) {
	return (
		<div className="swatch-overlay">
			<div className="swatches">{props.renderSwatches()}</div>
		</div>
	);
}
