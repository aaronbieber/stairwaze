.PHONY: bundle

bundle:
	react-native bundle \
	--dev false \
	--entry-file index.android.js \
	--platform android \
	--bundle-output android/app/src/main/assets/index.android.bundle \
	--assets-dest android/app/src/main/res
