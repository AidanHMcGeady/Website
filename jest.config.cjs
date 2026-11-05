module.exports = {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.[jt]sx?$": "babel-jest",
	},
	moduleNameMapper: {
		"\\.(css|png|jpe?g|gif|svg)$": "<rootDir>/test/fileMock.cjs",
		"\\.(css|less|scss|sass)$": "<rootDir>/test/__mocks__/styleMock.js",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"],
};
