vp/bin/activate: requirements.txt
	python3 -m venv vp
	vp/bin/pip install --upgrade pip setuptools wheel
	vp/bin/pip install -r requirements.txt
	touch vp/bin.activate

vp: vp/bin/activate

clean-vp:
	-rm -rf vp
