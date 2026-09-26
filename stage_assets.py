import os
import shutil
import zipfile

BASE_DIR = r"d:\1.Antigravity Projects\15_Engineering_Economics"
WEB_PUBLIC = os.path.join(BASE_DIR, "web", "public")
DOCS_DIR = os.path.join(WEB_PUBLIC, "docs")
SLIDES_DIR = os.path.join(WEB_PUBLIC, "slides")
DATA_DIR = os.path.join(WEB_PUBLIC, "data")

os.makedirs(DOCS_DIR, exist_ok=True)
os.makedirs(SLIDES_DIR, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)

# 1. Copy slides
rendered_slides = os.path.join(BASE_DIR, "rendered_slides")
if os.path.exists(rendered_slides):
    for f in os.listdir(rendered_slides):
        if f.endswith(".png"):
            shutil.copy2(os.path.join(rendered_slides, f), os.path.join(SLIDES_DIR, f))
    print("Copied all rendered slide images to web/public/slides/")

# 2. Copy Project 1 Documents
p1_dir = os.path.join(BASE_DIR, "Project 1")
shutil.copy2(os.path.join(p1_dir, "Eng Economics EBCA and FBCA.pdf"), os.path.join(DOCS_DIR, "Eng_Economics_EBCA_and_FBCA.pdf"))
shutil.copy2(os.path.join(p1_dir, "Eng Economics EBCA and FBCA.pptx"), os.path.join(DOCS_DIR, "Eng_Economics_EBCA_and_FBCA.pptx"))
print("Copied Project 1 PDF and PPTX to web/public/docs/")

# 3. Copy Project 2 Excel Workbooks
p2_dir = os.path.join(BASE_DIR, "Project 2")
for f in os.listdir(p2_dir):
    if f.endswith(".xlsx"):
        clean_name = f.replace(" ", "_").replace("-", "_")
        shutil.copy2(os.path.join(p2_dir, f), os.path.join(DOCS_DIR, clean_name))
print("Copied Project 2 Excel workbooks to web/public/docs/")

# 4. Copy JSON data
shutil.copy2(os.path.join(BASE_DIR, "eng_eco_data.json"), os.path.join(DATA_DIR, "eng_eco_data.json"))
print("Copied eng_eco_data.json to web/public/data/")

# 5. Create Master ZIP Archive
zip_path = os.path.join(DOCS_DIR, "Engineering_Economics_Full_Project_Archive.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
    manifest_txt = """================================================================================
MN 4023: ENGINEERING ECONOMICS - DUAL PROJECT ARCHIVE
Department of Materials Science and Engineering | University of Moratuwa
================================================================================

Lead Contributor: H.P.S. Premakumara (Index: 210494D)
Co-Contributors: K. Mayoorathan (210381E), T. Abhirami (210016R), 
                 P.A.C. Bibulewela (210070B), K.L. Themiya (210640A)

PROJECT 1: Prefabricated Ferrocement Wall Panels for Modular Construction
- Partner: National Engineering Research and Development Centre (NERDC)
- Scope: FBCA, EBCA, COMSOL FEA (40mm, 60mm solid, 60mm cored), Multi-Criteria Analysis, Risk Assessment
- Files: Presentation PDF and PPTX

PROJECT 2: Siyambalanduwa 100 MW Utility Solar PV Power Plant
- Location: Monaragala District, Sri Lanka (CEB Grid)
- Scope: 20-Year FBCA, EBCA with Shadow Conversion (SCF, SWRF, SERF), Multi-Parameter Sensitivity, AHP MCA
- Files: 5 Certified Excel Workbooks (.xlsx) and JSON Data Model

================================================================================
"""
    zipf.writestr("MANIFEST.txt", manifest_txt)

    # Add Project 1 docs
    zipf.write(os.path.join(DOCS_DIR, "Eng_Economics_EBCA_and_FBCA.pdf"), "Project_1_Ferrocement_Panels/Eng_Economics_EBCA_and_FBCA.pdf")
    zipf.write(os.path.join(DOCS_DIR, "Eng_Economics_EBCA_and_FBCA.pptx"), "Project_1_Ferrocement_Panels/Eng_Economics_EBCA_and_FBCA.pptx")

    # Add Project 2 Excel files
    for f in os.listdir(p2_dir):
        if f.endswith(".xlsx"):
            zipf.write(os.path.join(p2_dir, f), f"Project_2_Siyambalanduwa_Solar/{f}")

    # Add JSON data
    zipf.write(os.path.join(BASE_DIR, "eng_eco_data.json"), "Data/eng_eco_data.json")

print(f"Generated Master ZIP bundle at: {zip_path}")
